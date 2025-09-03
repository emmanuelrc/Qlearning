import { Stack, Link } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function ConceptsLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#0b7f8a' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#0e1a23' },
        headerLeft: route.name !== 'index' ? () => (
          <Link href="/concepts" asChild>
            <Pressable className="p-1">
              <Text className="text-lg text-white">{'\u2190'}</Text>
            </Pressable>
          </Link>
        ) : undefined,
      })}
    >
      <Stack.Screen name="index" options={{ title: 'concepts' }} />
    </Stack>
  );
}
