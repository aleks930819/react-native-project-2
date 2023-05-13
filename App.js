import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';

export default function App() {
  return (
    <LinearGradient
      colors={['#42060d', '#ddb52f', '#42060d']}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={{ flex: 1}}
        resizeMode='cover'
        imageStyle={{ opacity: 0.8 }}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1,
  },
});
