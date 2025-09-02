import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0e1a23' }}>
        <Stack screenOptions={{
          headerStyle: { backgroundColor: '#0b7f8a' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#0e1a23' }
        }}/>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
