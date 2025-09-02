import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';

export default function QuantumTunneling() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color:'#b9d7dc' }}>
              Quantum tunneling allows a particle to pass through a potential barrier even when its energy is lower than the barrier height. The probability depends exponentially on the barrier's width and height.
            </Text>
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color:'#b9d7dc' }}>
              Imagine a ball rolling toward a hill. Even if it lacks enough energy to go over, quantum mechanics lets it sometimes appear on the other side as if through a secret tunnel.
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
