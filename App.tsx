import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View testID="screen-root" style={styles.container}>
      <Text testID="hero-title" style={styles.title}>
        Hello accessibility repro
      </Text>
      <Text testID="hero-subtitle" style={styles.subtitle}>
        Expo SDK 56 • React Native 0.85.3 • iOS 26.2
      </Text>
      <TextInput
        testID="email-input"
        accessibilityLabel="Email"
        placeholder="Enter your email"
        style={styles.input}
      />
      <View testID="button-wrapper" style={styles.buttonWrapper}>
        <Button title="Press me" onPress={() => {}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  buttonWrapper: {
    width: '100%',
  },
});
