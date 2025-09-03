import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { cssInterop } from 'nativewind';

cssInterop(LinearGradient, { className: 'style' });

export default function Home() {
  return (
    <LinearGradient
      colors={['#0f172a', '#1e293b', '#0f172a']}
      className="flex-1 items-center justify-center px-8"
    >
      <View className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal-500 opacity-20" />
      <View className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-fuchsia-700 opacity-20" />

      <View className="w-full max-w-md items-center rounded-3xl bg-white/10 p-8 shadow-2xl">
        <Text className="mb-2 text-center text-5xl font-extrabold text-teal-300">
          Quantum Magic
        </Text>
        <Text className="mb-6 text-center text-lg text-slate-200">
          Dive into the subatomic world with vivid visuals and friendly explanations.
        </Text>

        <View className="mb-8 w-full gap-4">
          <View className="flex-row items-center gap-3">
            <Ionicons name="planet" size={24} color="#14b8a6" />
            <Text className="text-slate-200">Interactive visualizations</Text>
          </View>
          <View className="flex-row items-center gap-3">
            <Ionicons name="color-palette" size={24} color="#14b8a6" />
            <Text className="text-slate-200">Plain-language summaries</Text>
          </View>
          <View className="flex-row items-center gap-3">
            <Ionicons name="calculator" size={24} color="#14b8a6" />
            <Text className="text-slate-200">Math depth on demand</Text>
          </View>
        </View>

        <Link href="/concepts" asChild>
          <Pressable className="rounded-full bg-teal-600 px-8 py-4 shadow-lg shadow-black/50">
            <Text className="text-center text-lg font-bold text-white">Browse Concepts</Text>
          </Pressable>
        </Link>
      </View>
    </LinearGradient>
  );
}
