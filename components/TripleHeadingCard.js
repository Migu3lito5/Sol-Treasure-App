// TripleHeadingCard.js
import { View, ImageBackground, StyleSheet, Text } from 'react-native';

const TripleHeadingCard = ({
  imageSource,
  margin,
  mainHeading,
  subHeadings,
  subHeadingTexts,
  height, // Default height, adjust as needed
}) => {
  return (
    <ImageBackground
      source={imageSource}
      style={[styles.backgroundImage, { margin, height }]}
      resizeMode="cover"
    >
      <View style={styles.contentContainer}>
        <Text style={styles.mainHeading}>{mainHeading}</Text>
        <View style={styles.subHeadingsContainer}>
          {subHeadings.map((subHeading, index) => (
            <View key={index} style={styles.subHeadingContainer}>
              <Text style={styles.subHeading}>{subHeading}</Text>
              <Text style={styles.subHeadingText}>{subHeadingTexts[index]}</Text>
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeadingsContainer: {
    marginTop: 10,
  },
  subHeadingContainer: {
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeadingText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 30,
  },
});

export default TripleHeadingCard;