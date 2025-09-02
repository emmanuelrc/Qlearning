// components/Equation.tsx
import React, { useMemo, useState, useEffect } from 'react';
import { Platform, View, Text } from 'react-native';

type Props = { tex: string; block?: boolean };

// Dynamically load native math view only on native
let NativeMathView: any = null;
let katex: any = null;
if (Platform.OS === 'web') {
  try {
    katex = require('katex');
    require('katex/dist/katex.min.css');
  } catch {}
} else {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    NativeMathView = require('react-native-math-view').default;
  } catch {}
}

export default function Equation({ tex, block = true }: Props) {
  if (Platform.OS === 'web') {
    // Track whether KaTeX has loaded (it's injected in web/index.html)
    const [katexReady, setKatexReady] = useState<boolean>(() => {
      const w = window as any;
      return !!(w?.katex?.renderToString);
    });

    // Poll for the global katex object if it isn't ready yet so that we
    // re-render once the script finishes loading.
    useEffect(() => {
      if (!katexReady) {
        const id = setInterval(() => {
          const w = window as any;
          if (w?.katex?.renderToString) {
            setKatexReady(true);
          }
        }, 50);
        return () => clearInterval(id);
      }
      return undefined;
    }, [katexReady]);

    // Use global KaTeX loaded from CDN in web/index.html
    const html = useMemo(() => {
      if (katex?.renderToString) {
        try {
          return katex.renderToString(tex, {
            displayMode: block,
            throwOnError: false,
            strict: 'ignore',
          });
        } catch {
          // fall through to raw delimiters if KaTeX throws
        }
      }
      // Fallback: raw delimiters (will show plain text if KaTeX isn't ready)
      return block ? `$$${tex}$$` : `\\(${tex}\\)`;
    }, [tex, block, katexReady]);

    const isHtml = html.startsWith('<');

    return (
      <View style={{ paddingVertical: block ? 8 : 0 }}>
        {isHtml ? (
          <div
            style={{ color: 'white', fontSize: block ? 20 : 18, lineHeight: 1.35, overflowX: 'auto' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <div style={{ color: 'white', fontSize: block ? 20 : 18, lineHeight: 1.35 }}>
            {html}
          </div>
        )}
      </View>
    );
  }

  // Native path
  if (NativeMathView) {
    return (
      <NativeMathView
        math={block ? `$$${tex}$$` : `\\(${tex}\\)`}
        style={{ width: '100%' }}
        color="white"
        renderError={() => null}
      />
    );
  }

  // Fallback (native without lib)
  return (
    <View style={{ paddingVertical: 8 }}>
      <Text style={{ color: 'white' }}>{tex}</Text>
    </View>
  );
}
