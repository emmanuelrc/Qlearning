import { View, Text } from 'react-native';
import React from 'react';

export default function ConceptCard({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <View className="gap-2 rounded-2xl border border-white/10 bg-slate-800/60 p-4">
      <Text className="text-lg font-extrabold text-white">{title}</Text>
      <View className="gap-2">{children}</View>
    </View>
  );
}
