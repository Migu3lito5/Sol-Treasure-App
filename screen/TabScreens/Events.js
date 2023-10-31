import { View, Text, SafeAreaView, ScrollView } from "react-native"
import EventCard from "../../components/EventCard"

export default function Events() {
  return (
    <SafeAreaView>
      <Text>Hi</Text>
    <ScrollView>
        <EventCard imageSource={require('../../assets/Fall-Guitar-Eng.png')}/>
        <EventCard imageSource={require('../../assets/SPS-Eng.png')}/>
        <EventCard imageSource={require('../../assets/Fall-Guitar-Eng.png')}/>
        <EventCard imageSource={require('../../assets/Any-Ofrenda-Eng-1.png')}/>
        <EventCard imageSource={require('../../assets/Fall-Guitar-Eng.png')}/>
    </ScrollView>
    </SafeAreaView>
  )
}