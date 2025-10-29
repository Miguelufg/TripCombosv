import ImageViewer from '@/components/ImageViewer';
import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/logo.png');

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'login' }} />
      <View style={styles.container}>
        {/* 👇 Aquí se muestra el logo */}
        <ImageViewer imgSource={PlaceholderImage} />

        {/* 👇 Botón para iniciar sesión */}
        <Link href="/tabs/login" style={styles.button}>
          iniciar sesión !
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    marginTop: 20, // Espacio entre el logo y el botón
  },
});