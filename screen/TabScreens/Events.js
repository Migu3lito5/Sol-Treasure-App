import React from 'react';
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import EventCard from '../../components/EventCard';
import { useQuery } from 'react-query';
import { UseGetEventsData, fetchEventList } from '../../services/EventsAPI';


export default function Events() {
  const { data, isLoading } = UseGetEventsData();

  return (
    <SafeAreaView>
      {
        isLoading ? (<ActivityIndicator size="large" color="orange" />) 
          : data ? (
            <View>
              {data.events.map((event) => {
                // Check if event and event.image exist before accessing properties
                if (event && event.image && event.image.url) {
                  return (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      imageURL={event.image.url}
                      location={event.venue}
                      date={event.utc_start_date}
                    />
                  );
                } else {
                  return null; // Handle cases where event or event.image.url is missing
                  // might have to add a default image if that is the case
                }
              })}
            </View>
          )
        : <Text>Error</Text>
      }
    </SafeAreaView>
  );
}



 


