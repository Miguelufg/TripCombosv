import { Button, Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function Combo1() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Combo Playa + Hotel</Text>
      <Image source={require('@/assets/images/hotel2.png')} style={styles.image} />
      <Text style={styles.description}>
        Disfruta 3 días en Costa del Sol con hospedaje en Hotel Pacific Paradise. Incluye desayuno, transporte y vista al Volcán de San Vicente.
      </Text>
      <Button title="Elegir este combo" onPress={() => alert('Combo seleccionado')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  image: { width: '100%', height: 200, marginBottom: 10, borderRadius: 10 },
  description: { fontSize: 16, marginBottom: 20 },
});