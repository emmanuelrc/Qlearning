import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';

export default function Superposition() {
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Standard Concept">
            <Text style={{ color:'#b9d7dc' }}>
              A quantum system can exist in a linear combination of basis states. If |φ₁⟩ and |φ₂⟩ are valid states, any |
              ψ⟩ = α|φ₁⟩ + β|φ₂⟩ with complex coefficients α, β is also a valid state, enabling interference phenomena.
            </Text>
            <Equation tex={'\\lvert \\psi \\rangle = \\alpha \\lvert \\phi_1 \\rangle + \\beta \\lvert \\phi_2 \\rangle'} />
          </ConceptCard>
        }
        simple={
          <ConceptCard title="Simple Version">
            <Text style={{ color:'#b9d7dc' }}>
              Imagine a light switch that can be both "on" and "off" at the same time until you look. The system tries many
              possibilities at once and settles on one only when checked, like a spinning coin revealing heads or tails when it lands.
            </Text>
          </ConceptCard>
        }
      />
    </View>
  );
}
