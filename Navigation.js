import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import Events from './screen/TabScreens/Events';
import Home from './screen/TabScreens/Home';

// Creates the Bottom Tab Navigator 
const Tab = createBottomTabNavigator();

// Create the different tabs within the Tab Navigator
function TabGroup() {
  return (
    // These are some of customizing the tabs with things such as icons and color
    // Grabbed the icons from the vector-icons
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if(route.name === "Home") {
            iconName = focused ? 'md-home' : 'ios-home-outline'
          }
          if(route.name === "Events") {
            iconName = focused ? "calendar-day" : "calendar-alt"
          }
          if(route.name === "Home")
            return <Ionicons name={iconName} size={size} color={color} />
          else
            return <FontAwesome5 name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#FF5247",
      })}
    >
      {/* These are the current tabs in the Tab Navigator */}
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  )
}