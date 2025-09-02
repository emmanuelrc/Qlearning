import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';

export default function FeynmanPathIntegrals() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color: '#b9d7dc' }}>
              {'The path integral formulation sums over all possible paths connecting initial and final states, each weighted by the phase e^{iS/ħ}. (Feynman & Hibbs, 1965)'}
            </Text>
            <Equation tex={'\\langle x_f,t_f | x_i,t_i \\rangle = \\int \\mathcal{D}[x(t)] e^{\\tfrac{i}{\\hbar}S[x(t)]}'} />
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color: '#b9d7dc' }}>
              {'To know where a particle goes, imagine it trying every route. Each path adds a little voice; the paths that agree get louder while the rest cancel, revealing the most likely route.'}
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
