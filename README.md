# expo-sdk56-ios26-a11y-repro

Minimal Expo SDK 56 / React Native 0.85.3 repro scaffold for iOS 26.2 accessibility-tree investigation.

## Goal

Show a very small screen with:
- `Text` with `testID`
- `TextInput` with `testID`
- `Button`
- root `View` with `testID`

The target symptom is: UI is visible on screen, but XCUITest-based tools may fail to see the RN elements in the accessibility hierarchy on iOS 26.2.

## Stack

- Expo SDK 56
- React Native 0.85.3
- React 19.2.3

## Run

```bash
npm install
npx expo run:ios --device "iPhone 17 Pro"
```
