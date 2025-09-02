import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';

export default function HilbertSpaceBraKet() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color:'#b9d7dc' }}>
              Quantum states reside in a complex Hilbert space, a complete vector space with an inner product. Dirac's bra-ket notation uses |\u03c8\u27e9 for kets and \u27e8\u03c6| for bras.
            </Text>
            <Equation tex={'\\langle\\phi|\\psi\\rangle'} />
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color:'#b9d7dc' }}>
              Think of a Hilbert space as a big room of possible states. A ket points to a spot in the room, and a bra is like a beam measuring that spot. Their combination gives a number telling how much they agree.
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
