import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const API_BASE_URL = 'https://soltreasures.com/wp-json/tribe/events/v1/events';

const getEventsFromAPI = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const UseGetEventsData = () => {
  const {data, isLoading} = useQuery('EventData', getEventsFromAPI);
  return {data, isLoading};
};


