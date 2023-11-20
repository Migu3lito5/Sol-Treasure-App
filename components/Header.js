import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/sol-treasures-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0, // Adjust the paddingTop as needed
    height: 120, // Set a fixed height for the logo container
  },
  logo: {
    aspectRatio: 2,
    width: '70%',
    height: '100%', // Ensure the logo takes the full height of its container
  },
});

export default Header;
