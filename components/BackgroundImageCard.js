// BackgroundImageCard.js
import { View, ImageBackground, StyleSheet, Text } from 'react-native';

const BackgroundImageCard = ({
    imageSource,
    margin,
    headingText,
    paragraphText,
    height, // Default height, adjust as needed
  }) => {
    return (
      <ImageBackground
        source={imageSource}
        style={[styles.backgroundImage, { margin, height }]}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{headingText}</Text>
          <Text style={styles.paragraph}>{paragraphText}</Text>
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
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'white',
      textAlign: 'center',
    },
    paragraph: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
      marginHorizontal: 30,
    },
  });

export default BackgroundImageCard;
