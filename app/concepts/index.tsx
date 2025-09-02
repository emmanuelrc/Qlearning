// app/concepts/index.tsx
import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

const items = [
  { path: '/concepts/double-slit', title: 'Double-Slit Experiment' },
  { path: '/concepts/wavefunction-born-rule', title: 'Wavefunction & Born Rule' },
  { path: '/concepts/heisenberg-uncertainty', title: 'Heisenberg Uncertainty' },
  { path: '/concepts/superposition', title: 'Superposition Principle' },
  { path: '/concepts/time-dependent-schrodinger', title: 'Time-Dependent Schrödinger' },
  { path: '/concepts/quantum-tunneling', title: 'Quantum Tunneling' },
  { path: '/concepts/spin-and-pauli-matrices', title: 'Spin & Pauli Matrices' },
  { path: '/concepts/entanglement', title: 'Quantum Entanglement' },
  { path: '/concepts/measurement-collapse', title: 'Measurement & Collapse' },
  { path: '/concepts/hilbert-space-bra-ket', title: 'Hilbert Space & Bra–Ket' },
  { path: '/concepts/feynman-path-integrals', title: 'Feynman Path Integrals' },
];

export default function ConceptsIndex() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: '800', color: 'white' }}>Concepts</Text>
      {items.map((i) => (
        <Link key={i.path} href={i.path} asChild>
          <Pressable
            style={{
              padding: 14,
              backgroundColor: '#0f1922',
              borderRadius: 14,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,.08)',
            }}
          >
            <Text style={{ color: 'white', fontWeight: '700' }}>{i.title}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
