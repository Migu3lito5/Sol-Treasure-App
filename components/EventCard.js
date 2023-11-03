import { View, StyleSheet, Text, Image} from 'react-native'

export default function EventCard({imageURL, date, title, location}) {

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageURL}} />
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.cardDate}>
          <Text style={styles.dateText}>{formatDate(date)}</Text>
        </View>
        <Text style={styles.title}>{formatTitle(title)}</Text>
        <Text style={styles.location}>
          {formatLocation(location)}
        </Text>
      </View>
    </View>
  );
}

// Input Example : 2023-11-11 18:00:00
const formatDate = (date) => {
  const month = +date.substring(8,10);
  const day = date.substring(5,7);
  const year = date.substring(0,4);
  
  const monthNames = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return `${day} ${monthNames[month]}. ${year}`
}

const formatLocation = (location) => {
  const street = location.address;
  const city = location.city;

  return `${street} ${city}`
}

const formatTitle = (title) => {
  if(title.length > 30)
    return `${title.substring(0,27)}...`
  
  return title.substring(0,30);
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 7,
    marginTop: 10,
  },
  imageContainer: {
    aspectRatio: 0.8,
    justifyContent: 'center', // Vertically center the image
    overflow: 'hidden', // Clip image content to rounded corners
    borderRadius: 10, // Apply rounded corners to the image container
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Scale the image to fit within the container
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
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 12,
  },
});

