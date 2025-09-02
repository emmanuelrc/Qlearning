// components/Equation.tsx
import React, { useMemo } from 'react';
import { Platform, View, Text } from 'react-native';

type Props = { tex: string; block?: boolean };

// Dynamically load native math view only on native
let NativeMathView: any = null;
if (Platform.OS !== 'web') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    NativeMathView = require('react-native-math-view').default;
  } catch {}
}

export default function Equation({ tex, block = true }: Props) {
  if (Platform.OS === 'web') {
    // Use global KaTeX loaded from CDN in web/index.html
    const html = useMemo(() => {
      const w = window as any;
      if (w?.katex?.renderToString) {
        try {
          return w.katex.renderToString(tex, {
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
    }, [tex, block]);

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
