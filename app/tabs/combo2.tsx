import { Button, Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function Combo2() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Combo Montaña + Hotel</Text>
      <Image source={require('@/assets/images/hotel1.png')} style={styles.image} />
      <Text style={styles.description}>
        Vive 2 noches en Mirador de la Cumbre, con senderismo guiado al Volcán Ilamatepec y cena incluida.
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