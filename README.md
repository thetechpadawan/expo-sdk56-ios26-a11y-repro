# expo-sdk56-ios26-a11y-repro

Minimal Expo SDK 56 / React Native 0.85.3 repro for an iOS 26.2 XCUITest accessibility-tree regression.

## Symptom

The React Native UI is visibly rendered on screen, but XCUITest-based tools may see only a nearly-empty hierarchy:
- app root / window
- native overlays
- missing RN `Text`, `TextInput`, `Button`, and `testID` nodes

## Stack

- Expo SDK 56.0.12
- React Native 0.85.3
- React 19.2.3
- iOS Simulator 26.2
- Xcode 26.2

## Repro app UI

The app renders:
- `Text` with `testID="hero-title"`
- `Text` with `testID="hero-subtitle"`
- `TextInput` with `testID="email-input"`
- `Button` with title `Press me`

## Run

```bash
npm install
npx expo run:ios --device "iPhone 17 Pro"
```

Then start the dev server for the installed dev client:

```bash
npx expo start --dev-client
```

## Maestro reproduction

A minimal flow is included at `.maestro/flow.yaml`.

Run:

```bash
maestro test .maestro/flow.yaml
```

## Expected

Maestro / XCUITest should see the visible RN elements and the flow should pass.

## Actual

On the affected stack, the screen is visible but the hierarchy can be nearly empty, causing the flow to fail on the first assertion.
