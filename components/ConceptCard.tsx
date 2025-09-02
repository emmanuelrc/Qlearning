import { View, Text } from 'react-native';
import React from 'react';

export default function ConceptCard({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <View style={{ backgroundColor: '#0f1922', borderRadius: 18, padding: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,.08)', gap: 8 }}>
      <Text style={{ color: 'white', fontWeight: '800', fontSize: 18 }}>{title}</Text>
      <View style={{ gap: 8 }}>{children}</View>
    </View>
  );
}
