import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';

export default function HeisenbergUncertainty() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color:'#b9d7dc' }}>
              The Heisenberg uncertainty principle limits simultaneous knowledge of conjugate variables like position and momentum.
            </Text>
            <Equation tex={'\\Delta x\\, \\Delta p \\ge \\tfrac{\\hbar}{2}'} />
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color:'#b9d7dc' }}>
              It's like photographing a rolling soccer ball. A quick snapshot shows where it is but blurs its speed; a long exposure shows speed but blurs position.
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
