# QM‑Edu Starter (Expo + React Native Web + expo-router)

One codebase that runs on iOS, Android, and the Web. Each quantum concept has two synchronized views: **Standard** (notation/derivations) and **Simple** (plain language + visuals).

## Quick start

```bash
# 1) install deps (Node 18+ recommended)
npm i

# 2) start
npx expo start
# press: w = open Web, a = Android, i = iOS (macOS only)
```

> If Expo asks to install compatible versions, accept the prompts (or run `npx expo install` for any missing peer deps).

## Tech

- Expo SDK 51, React Native 0.74, React 18
- **expo-router** for file-based routes
- **react-native-svg** for diagrams
- **react-native-math-view** (native) + **KaTeX via CDN** (web) through a single `<Equation/>` component
- Gesture-ready layout (gesture-handler, reanimated)

## Structure

```
app/
  _layout.tsx            # router + theming
  index.tsx              # home
  concepts/
    index.tsx
    superposition.tsx
    double-slit.tsx
    entanglement.tsx
components/
  Equation.tsx
  ConceptCard.tsx
  TwoPane.tsx
  SpinToy.tsx
  SlitToy.tsx
web/
  index.html             # KaTeX includes for web
```

## Notes

- On **web**, equations are rendered by KaTeX (loaded in `web/index.html`). In components, we wrap TeX in delimiters so the auto-render script picks it up.
- On **native**, the same `<Equation/>` uses `react-native-math-view`.
- If you see a Reanimated warning, make sure the `react-native-reanimated/plugin` is present in `babel.config.js` (it already is).

Enjoy building! 🧪
