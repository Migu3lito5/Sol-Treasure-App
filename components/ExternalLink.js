import { TouchableOpacity, Text, Linking } from 'react-native';

const ExternalLink = ({ url, children }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

export default ExternalLink;