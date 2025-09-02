import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Svg, { Path, Line } from 'react-native-svg';

export default function SlitToy(){
  const [a, setA] = useState(true);
  const [b, setB] = useState(true);
  const [phi, setPhi] = useState(0); // relative phase in radians
  const nudgePhi = (d:number)=> setPhi(p=>p+d);

  const samples = 100;
  const data:string[] = [];
  for(let i=0;i<=samples;i++){
    const x = i/samples;
    const phase = 10*(x-0.5);
    const A = a ? 1 : 0;
    const B = b ? 1 : 0;
    const real = A + B*Math.cos(phi+phase);
    const imag =     B*Math.sin(phi+phase);
    const I = real*real + imag*imag; // 0..4
    const y = 1 - Math.min(I/4,1);
    data.push(`${x*300},${y*120+10}`);
  }

  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection:'row', gap:8 }}>
        <Pressable onPress={()=>setA(v=>!v)} style={{ backgroundColor: a?'#0b7f8a':'#0f1922', padding:8, borderRadius:10, borderWidth:1, borderColor:'rgba(255,255,255,.15)' }}>
          <Text style={{ color:'white' }}>Slit A {a?'ON':'OFF'}</Text>
        </Pressable>
        <Pressable onPress={()=>setB(v=>!v)} style={{ backgroundColor: b?'#0b7f8a':'#0f1922', padding:8, borderRadius:10, borderWidth:1, borderColor:'rgba(255,255,255,.15)' }}>
          <Text style={{ color:'white' }}>Slit B {b?'ON':'OFF'}</Text>
        </Pressable>
        <Pressable onPress={()=>nudgePhi(-0.2)} style={{ backgroundColor:'#0b7f8a', padding:8, borderRadius:10 }}>
          <Text style={{ color:'white' }}>φ −</Text>
        </Pressable>
        <Pressable onPress={()=>nudgePhi(0.2)} style={{ backgroundColor:'#0b7f8a', padding:8, borderRadius:10 }}>
          <Text style={{ color:'white' }}>φ +</Text>
        </Pressable>
        <Text style={{ color:'white', marginLeft:8 }}>φ ≈ {phi.toFixed(2)} rad</Text>
      </View>

      <Svg width={320} height={140} viewBox="0 0 320 140" style={{ backgroundColor:'#0f1922', borderRadius:12, borderWidth:1, borderColor:'rgba(255,255,255,.08)' }}>
        <Line x1="10" y1="130" x2="310" y2="130" stroke="white" strokeOpacity="0.25"/>
        <Path d={`M10,130 L${data.map(p=>p).join(' L ')}`} fill="none" stroke="white" strokeWidth={2}/>
      </Svg>
      <Text style={{ color:'#b9d7dc' }}>Turn one slit off to see fringes disappear. Change φ to shift the pattern.</Text>
    </View>
  );
}
