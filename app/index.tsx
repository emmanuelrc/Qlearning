import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 gap-4 p-6">
      <Text className="text-3xl font-extrabold text-white">
        Quantum Mechanics, Two Ways
      </Text>
      <Text className="text-slate-300">
        Each topic is explained in the usual standards (math/notation) and in super simple terms with visuals.
      </Text>

      <Link href="/concepts" asChild>
        <Pressable className="rounded-2xl bg-teal-700 px-4 py-4">
          <Text className="font-bold text-white">Browse Concepts</Text>
        </Pressable>
      </Link>
    </View>
  );
}
