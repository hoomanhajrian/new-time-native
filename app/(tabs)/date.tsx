import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import CalendarComponent from '@/app/components/CalendarComponent';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <CalendarComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    width:'100%',
    backgroundColor: "#fff",
  }
});
