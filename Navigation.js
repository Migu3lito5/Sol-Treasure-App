import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons, FontAwesome5,  MaterialCommunityIcons } from '@expo/vector-icons'; 
import Events from './screen/TabScreens/Events';
import Home from './screen/TabScreens/Home';
import Donation from './screen/TabScreens/Donation';

const navTheme = DefaultTheme;
navTheme.colors.background = '#fffefc';
// Creates the Bottom Tab Navigator 
const Tab = createBottomTabNavigator();

// Create the different tabs within the Tab Navigator
function TabGroup() {
  return (
    // These are some of customizing the tabs with things such as icons and color
    // Grabbed the icons from the vector-icons
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "md-home" : "ios-home-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            case "Events":
              iconName = focused ? "calendar-day" : "calendar-alt";
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            case "Donate":
              iconName = focused ? "hand-heart" : "hand-heart-outline";
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            default:
              return null; // Return null for unknown routes
          }
        },
        tabBarActiveTintColor: "#FF5247",
      })}
    >
      {/* These are the current tabs in the Tab Navigator */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Events" component={Events}/>
      <Tab.Screen name="Donate" component={Donation}/>
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