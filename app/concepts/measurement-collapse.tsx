import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';

export default function MeasurementCollapse() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color:'#b9d7dc' }}>
              Quantum measurement projects a system's state onto an eigenstate of the measurement operator. After measurement, the wavefunction collapses to the observed eigenstate.
            </Text>
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color:'#b9d7dc' }}>
              Before you peek, a quantum object tries many outfits at once. Looking forces it to freeze wearing one outfit, the wavefunction collapse.
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
