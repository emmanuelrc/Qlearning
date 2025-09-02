import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

function clamp(v:number,min:number,max:number){ return Math.max(min, Math.min(max, v)); }

export default function SpinToy() {
  const [theta, setTheta] = useState(45); // degrees
  const rad = theta * Math.PI / 180;
  const pUp = Math.cos(rad/2)**2;
  const pDown = 1 - pUp;

  const nudge = (d:number)=> setTheta(t=>clamp(t+d,0,180));

  return (
    <View style={{ gap: 12 }}>
      <Text style={{ color: '#b9d7dc' }}>Set angle θ relative to |↑⟩ basis</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Pressable onPress={()=>nudge(-5)} style={{ backgroundColor:'#0b7f8a', borderRadius:12, padding:8 }}>
          <Text style={{ color:'white', fontWeight:'700' }}>−5°</Text>
        </Pressable>
        <Pressable onPress={()=>nudge(5)} style={{ backgroundColor:'#0b7f8a', borderRadius:12, padding:8 }}>
          <Text style={{ color:'white', fontWeight:'700' }}>+5°</Text>
        </Pressable>
        <Text style={{ color:'white', marginLeft:8 }}>θ = {theta.toFixed(0)}°</Text>
      </View>

      <Svg width="200" height="200" viewBox="0 0 200 200" style={{ alignSelf:'center', backgroundColor:'#0f1922', borderRadius:100, borderWidth:1, borderColor:'rgba(255,255,255,.08)' }}>
        <Circle cx="100" cy="100" r="80" stroke="white" strokeOpacity="0.25" strokeWidth="2" fill="none" />
        <Line x1="100" y1="20" x2="100" y2="180" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
        {(() => {
          const r = 80;
          const x = 100 + r * Math.sin(rad);
          const y = 100 - r * Math.cos(rad);
          return <Line x1="100" y1="100" x2={x} y2={y} stroke="white" strokeWidth="3" />;
        })()}
      </Svg>

      <View style={{ gap: 6 }}>
        <Text style={{ color:'white', fontWeight:'700' }}>P(↑) = {pUp.toFixed(3)}   P(↓) = {pDown.toFixed(3)}</Text>
        <View style={{ height: 10, backgroundColor:'#0f1922', borderRadius: 8, borderWidth:1, borderColor:'rgba(255,255,255,.08)', overflow:'hidden' }}>
          <View style={{ width: `${pUp*100}%`, height: '100%', backgroundColor:'#0b7f8a' }}/>
        </View>
      </View>
    </View>
  );
}
