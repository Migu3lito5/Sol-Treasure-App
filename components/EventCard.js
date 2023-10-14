import { View, StyleSheet, Text, Image} from 'react-native'

export default function EventCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.imageSource} />
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.cardDate}>
          <Text style={styles.dateText}>12 Oct. 2023</Text>
        </View>
        <Text style={styles.title}>Sol Performing Strings</Text>
        <Text style={styles.description}>
          Join our instructor Aya Ettinger and learn or expand on your violin skills!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: "auto",
    margin: 10,
  },
  imageContainer: {
    aspectRatio: 1, 
    width: "auto",// To maintain a 1:1 aspect ratio
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
  },
  cardInfo: {
    padding: 15,
    paddingBottom: 20,
    flex: 1,
  },
  cardDate: {
    marginBottom: 10,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'orange',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
  },
});

