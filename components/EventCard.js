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
          519 Broadway St., King City, United States
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: "auto",
    margin: 7,
  },
  imageContainer: {
    aspectRatio: 0.8, 
    margin: 5,
    flexDirection: 'column',
    justifyContent: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    borderRadius: 7,
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

