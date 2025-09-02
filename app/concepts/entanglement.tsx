import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';

export default function Entanglement() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Bell state">
            <Equation tex={'\\lvert \\Phi^+ \\rangle = \\frac{1}{\\sqrt{2}}(\\lvert 00 \\rangle + \\lvert 11 \\rangle)'} />
            <Text style={{ color:'#b9d7dc' }}>
              Measurements on either qubit are perfectly correlated.
            </Text>
          </ConceptCard>
        }
        simple={
          <ConceptCard title="What's the idea?">
            <Text style={{ color:'#b9d7dc' }}>
              Two particles can share a single combined state. Measure one and you instantly know the other, no matter the distance.
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
