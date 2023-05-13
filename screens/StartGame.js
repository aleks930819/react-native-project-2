import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';

const StartGame = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
    }
    onStartGame(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor={Colors.accent}
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredValue}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary700,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    color: Colors.accent,
    marginVertical: 10,
    fontWeight: 'bold',
    width: '11%',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },

  button: {
    flex: 1,
  },
});
