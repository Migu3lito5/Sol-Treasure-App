// Home.js
import React from 'react';
import { SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import BackgroundImageCard from '../../components/BackgroundImageCard';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Header />
           {/* Customizable BackgroundWithContent */}
          <BackgroundImageCard
          imageSource={require('../../assets/home1.jpg')}
          margin={10}
          height={300} // Adjust the height as needed
          headingText="Our Mission"
          paragraphText="SOL Treasures awakens and nurtures appreciation and passion for the arts in people of all ages in South Monterey County and provides a home for creative and inspiring opportunities to unify the community through art and culture."
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
