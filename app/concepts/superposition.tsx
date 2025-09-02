import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';
import SpinToy from '../../components/SpinToy';

export default function Superposition() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Definition">
            <Text style={{ color:'#b9d7dc' }}>
              A state |ψ⟩ is a linear combination of basis states. For a spin‑½ in the z‑basis:
            </Text>
            <Equation tex={'\\lvert \\psi \\rangle = \\alpha \\lvert \\uparrow \\rangle + \\beta \\lvert \\downarrow \\rangle,\\quad \\lvert\\alpha\\rvert^2+\\lvert\\beta\\rvert^2=1'} />
            <ConceptCard title="Measurement rule">
              <Equation tex={'P(\\uparrow)=\\lvert\\alpha\\rvert^2,\\quad P(\\downarrow)=\\lvert\\beta\\rvert^2'}/>
            </ConceptCard>
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Intuition">
            <Text style={{ color:'#b9d7dc' }}>
              Think of the state as a direction on a sphere. The closer it points to ↑, the more likely you’ll read ↑.
            </Text>
            <SpinToy />
          </ConceptCard>
        }
      />
    </View>
  );
}
