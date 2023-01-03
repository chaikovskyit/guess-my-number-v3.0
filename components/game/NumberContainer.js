import {View, Text, StyleSheet, Dimensions} from 'react-native'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    marginTop: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

  },
  numberText: {
    color: 'white',
    fontSize: deviceWidth < 380 ? 28 : 46,
    fontWeight: 'bold',
  }
});
