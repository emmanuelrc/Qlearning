import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="flex-1 bg-slate-900">
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#0e1a23' },
          }}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
