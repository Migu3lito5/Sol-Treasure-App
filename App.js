import { ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import EventCard from './components/EventCard';


export default function App() {
  return (
    <ScrollView>
    <SafeAreaView>
    <View style={styles.container}>
      <EventCard imageSource={require('./assets/SPS-Eng.png')} />
      <EventCard imageSource={require('./assets/Fall-Guitar-Eng.png')} />        
      <EventCard imageSource={require('./assets/Any-Ofrenda-Eng-1.png')} />
      <EventCard imageSource={require('./assets/SPS-Eng.png')} />
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

