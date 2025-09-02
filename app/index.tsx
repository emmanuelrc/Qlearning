import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: '800', color: 'white' }}>
        Quantum Mechanics, Two Ways
      </Text>
      <Text style={{ color: '#b9d7dc' }}>
        Each topic is explained in the usual standards (math/notation) and in super simple terms with visuals.
      </Text>

      <Link href="/concepts" asChild>
        <Pressable style={{ padding: 16, borderRadius: 16, backgroundColor: '#0b7f8a' }}>
          <Text style={{ color: 'white', fontWeight: '700' }}>Browse Concepts</Text>
        </Pressable>
      </Link>
    </View>
  );
}
