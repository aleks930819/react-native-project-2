import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: '#ddb52f',
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
    backgroundColor: '#72063a',
    borderRadius: 10,
    margin: 4,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#72063a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  buttonText: {
    color: '#ddb52f',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  pressed: {
    opacity: 0.65,
  },
});
