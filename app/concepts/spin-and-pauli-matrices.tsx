import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';

export default function SpinAndPauliMatrices() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color:'#b9d7dc' }}>
              Spin is an intrinsic form of angular momentum described by operators obeying SU(2) algebra. For spin-1/2 particles, observables are represented by the Pauli matrices.
            </Text>
            <Equation tex={'[\\sigma_i,\\sigma_j]=2i\\varepsilon_{ijk}\\sigma_k'} />
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color:'#b9d7dc' }}>
              Picture a tiny top that never stops spinning. Pauli matrices are like switches telling how it's spinning along different directions. Measuring gives only "up" or "down".
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
