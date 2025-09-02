import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';

export default function WavefunctionBornRule() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color:'#b9d7dc' }}>
              The wavefunction \u03c8(r,t) encapsulates all information about a quantum system. Born's rule states that the probability density of finding a particle at position r is |\u03c8(r,t)|\u00b2.
            </Text>
            <Equation tex={'P(\\mathbf{r},t)=\\lvert\\psi(\\mathbf{r},t)\\rvert^2'} />
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color:'#b9d7dc' }}>
              Think of the wavefunction as a magical fog around the particle. Where the fog is thick, you're more likely to find the particle. Squaring the fog's thickness gives the chance of finding it there.
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
