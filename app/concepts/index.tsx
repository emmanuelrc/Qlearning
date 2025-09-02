import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

const items = [
  { path: '/concepts/superposition', title: 'Superposition' },
  { path: '/concepts/double-slit', title: 'Double Slit' },
  { path: '/concepts/entanglement', title: 'Entanglement' },
];

export default function ConceptsIndex() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: '800', color: 'white' }}>Concepts</Text>
      {items.map(i => (
        <Link key={i.path} href={i.path} asChild>
          <Pressable style={{ padding: 14, backgroundColor: '#0f1922', borderRadius: 14, borderWidth: 1, borderColor: 'rgba(255,255,255,.08)' }}>
            <Text style={{ color: 'white', fontWeight: '700' }}>{i.title}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
