import {Text,View} from 'react-native';
import AboutPage from './aboutPage';
import HomePage from './homePage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();

const my_app = () => {
  return(
    <Tab.Navigator
      screenOptions={
        {
          tabBarActiveTintColor:'white',
          tabBarInActiveTintColor:'gray',
          tabBarStyle:{backgroundColor:'black'}
        }
      }
    >
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarLabel:"Home",
        tabBarIcon:({ color })=>{
          return <MaterialCommunityIcons name="home" size={26} color={color}/>
        }
      }}/>
      <Tab.Screen name="About" component={AboutPage} options={{
        tabBarLabel:"About",
        tabBarIcon:({color})=>{
          return <MaterialCommunityIcons name="vide-stabilization" size={26} color={color}/>
        }
      }}/>
    </Tab.Navigator>
  )
}

export default my_app;