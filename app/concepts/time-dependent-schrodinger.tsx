import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';

export default function TimeDependentSchrodinger() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color:'#b9d7dc' }}>
              The time evolution of a non-relativistic quantum system is governed by the time-dependent Schr\u00f6dinger equation.
            </Text>
            <Equation tex={'i\\hbar\\tfrac{\\partial}{\\partial t}\\lvert\\psi(t)\\rangle = \\hat{H}\\lvert\\psi(t)\\rangle'} />
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color:'#b9d7dc' }}>
              This equation is like a recipe telling how a quantum system changes over time, mixing ingredients set by the Hamiltonian just like a soup simmering.
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
