import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
  };

  let screen = userNumber ? (
    <GameScreen userNumber={userNumber} />
  ) : (
    <StartGame onStartGame={pickedNumberHandler} />
  );

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent, Colors.primary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.8 }}
      >
        <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: Colors.accent,
    flex: 1,
  },
});
