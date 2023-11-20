import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import Header from "../../components/Header"
import BackgroundImageCard from "../../components/BackgroundImageCard";
import ExternalLink from "../../components/ExternalLink";

export default function Donation() {
  return (
    <SafeAreaView style={styles.container}>
      
        <Header/>
        <ExternalLink url={"https://soltreasures.com/donate/"}>
          <BackgroundImageCard
            imageSource={require('../../assets/donate-1.jpg')}
            margin={10}
            height={300}
            headingText={"Donate Today"}
            paragraphText="Your gift in any amount will support the many programs for all people in our community. Sol Treasures provides free and low cost visual and performing arts education and enrichment to the young people of our community.
            "
          
          />
        </ExternalLink>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
