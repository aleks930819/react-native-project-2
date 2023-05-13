import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: Colors.accent,
        }}
        style={({ presed }) => ({
          ...styles.button,
          ...(presed && styles.pressed),
        })}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    backgroundColor: Colors.primary500,
    borderRadius: 10,
    margin: 4,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colors.primary500,

    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  buttonText: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  pressed: {
    opacity: 0.65,
  },
});
