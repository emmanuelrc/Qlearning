import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function TwoPane({ standard, simple }: { standard: React.ReactNode; simple: React.ReactNode }) {
  const [tab, setTab] = useState<'standard'|'simple'>('standard');
  const Tab = ({ id, label }: { id: 'standard'|'simple'; label: string }) => (
    <Pressable
      onPress={() => setTab(id)}
      className={`rounded-full border border-white/15 px-3 py-2 ${tab === id ? 'bg-teal-700' : 'bg-transparent'}`}
    >
      <Text className="font-bold text-white">{label}</Text>
    </Pressable>
  );
  return (
    <View className="gap-3">
      <View className="flex-row gap-2">
        <Tab id="standard" label="Standard" />
        <Tab id="simple" label="Simple" />
      </View>
      <View className="gap-2">{tab === 'standard' ? standard : simple}</View>
    </View>
  );
}
