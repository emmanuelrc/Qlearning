import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function TwoPane({ standard, simple }: { standard: React.ReactNode; simple: React.ReactNode }) {
  const [tab, setTab] = useState<'standard'|'simple'>('standard');
  const Tab = ({ id, label }: { id: 'standard'|'simple'; label: string }) => (
    <Pressable onPress={() => setTab(id)} style={{ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 999, backgroundColor: tab===id ? '#0b7f8a':'transparent', borderWidth:1, borderColor:'rgba(255,255,255,.15)' }}>
      <Text style={{ color: 'white', fontWeight: '700' }}>{label}</Text>
    </Pressable>
  );
  return (
    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Tab id="standard" label="Standard" />
        <Tab id="simple" label="Simple" />
      </View>
      <View style={{ gap: 10 }}>{tab === 'standard' ? standard : simple}</View>
    </View>
  );
}
