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
            <Pressable style={{ padding: 4 }}>
              <Text style={{ color: 'white', fontSize: 18 }}>{'\u2190'}</Text>
            </Pressable>
          </Link>
        ) : undefined,
      })}
    >
      <Stack.Screen name="index" options={{ title: 'concepts' }} />
    </Stack>
  );
}
