import { Button, StyleSheet } from 'react-native';

export default function SosButton() {
  return <Button style={styles.btn} title="SOS" />;
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 10,
    top: 200,
    width: 80,
    height: 80,
    backgroundColor: 'crimson',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    color: 'white',
  },
});
