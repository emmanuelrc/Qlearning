import { View, Text } from 'react-native';
import TwoPane from '../../components/TwoPane';
import ConceptCard from '../../components/ConceptCard';
import Equation from '../../components/Equation';
import SlitToy from '../../components/SlitToy';

export default function DoubleSlit(){
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <TwoPane
        standard={
          <ConceptCard title="Interference amplitude">
            <Equation tex={'\\Psi = \\Psi_A + e^{i\\phi}\\,\\Psi_B'} />
            <Equation tex={'I = \\lvert\\Psi\\rvert^2 = \\lvert\\Psi_A\\rvert^2 + \\lvert\\Psi_B\\rvert^2 + 2\\,\\Re\\{\\Psi_A^* e^{i\\phi} \\Psi_B\\}'}/>
          </ConceptCard>
        }
        simple={
          <ConceptCard title="What’s happening?">
            <Text style={{ color:'#b9d7dc' }}>
              Two “ripples” add up. Where peaks meet peaks you get bright; where peaks meet troughs you get dark.
            </Text>
            <SlitToy />
          </ConceptCard>
        }
      />
    </View>
  );
}
