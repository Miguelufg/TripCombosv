import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CombosScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explora nuestros combos turísticos</Text>

      <Button title="Combo Playa + Hotel" onPress={() => router.push('/tabs/combo1')} />
      <Button title="Combo Montaña + Hotel" onPress={() => router.push('/tabs/combo2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
});