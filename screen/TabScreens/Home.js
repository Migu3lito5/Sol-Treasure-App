// Home.js
import React from 'react';
import { SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import BackgroundImageCard from '../../components/BackgroundImageCard';
import TripleHeadingCard from '../../components/TripleHeadingCard';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        // Todo: Make this better looks too messy 
        <BackgroundImageCard
          imageSource={require('../../assets/home1.jpg')}
          margin={10}
          height={300} // Adjust the height as needed
          headingText="Our Mission"
          paragraphText="SOL Treasures awakens and nurtures appreciation and passion for the arts in people of all ages in South Monterey County and provides a home for creative and inspiring opportunities to unify the community through art and culture."
        />
        <TripleHeadingCard
          imageSource={require('../../assets/home2.jpg')}
          margin={10}
          height={550}
          mainHeading="Why?"
          subHeadings={['Art', 'Music', 'Theater']}
          subHeadingTexts={[
            'Art helps us express our feelings, emotions, and thoughts in ways that are not always possible through words or actions. It can help us understand certain feelings through expression and creativity!',
            'Music provides an opportunity for people from all social and cultural backgrounds to express themselves. When words can fail, music is understood!',
            'Theatre helps people develop a strong sense of self and identity, build empathy and relationships with peers, and empower participants to transform their understanding of their place in the world!',
          ]}
        />
        <TripleHeadingCard
          imageSource={require('../../assets/home3.jpg')}
          margin={10}
          height={550}
          mainHeading="What?"
          subHeadings={['Events', 'Theater', 'Gallery']}
          subHeadingTexts={[
            'At Sol Treasures we offer inspiring art workshops for everyone, see our listing and join us!',
            'The performing arts enrich the lives of youth, bolster the morale of the community, and provide a home for young actors and singers through the Sol Treasures theater programs. Come join the fun!',
            'Enjoy interactive gallery exhibits, introducing aspiring artists with inspiring ideas! ',
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default Home;
