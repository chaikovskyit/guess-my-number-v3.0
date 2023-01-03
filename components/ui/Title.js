import { Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderRadius: 8,
    padding: 12,
    maxWidth: '80%'
  },
});
