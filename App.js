import React from 'react'
import {StyleSheet} from 'react-native';
import {Text, Button, Image, View} from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, NavigationContainer  } from '@react-navigation/native';
import Screen from './pages/Screen';
import AboutUs from './pages/AboutUs';
import Dashboard from './src/components/Dashboards';
import NivelDagua from './src/components/NivelDagua';
import Irrigacao from './src/components/Irrigacao';
import Umidade from './src/components/Umidade';

const image = require("./src/assets/logo1.png");

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Home = ({navigation})=>{
  return(
  <Stack.Navigator
    initialRouteName="Screen"
    screenOptions={{
      headerTitle:()=>(
        <Image 
            source={require('./src/assets/logo1.png')} 
            style={{ width: 130, height: 40}}
            resizeMode='contain'
        />
        ),
      headerStyle:{
         backgroundColor:'#3CB371',
      }, 
      headerTitleStyle:{alignSelf: 'center'},
      headerTitleAlign:'center',
      headerLeft: ()=>(
        <Button
          icon={{
            name: "menu",
            size: 40,
            color: "black"
          }}
          type="clear"
          onPress={() => navigation.openDrawer()}
        />
      )
    }}
  >
        <Stack.Screen name="Screen"     component={Screen}  />
        <Stack.Screen name="Irrigacao"  component={Irrigacao} options={{title:"Voltar"}} />
        <Stack.Screen name="NivelDagua" component={NivelDagua} />
        <Stack.Screen name="Umidade"    component={Umidade} />
        <Stack.Screen name="Dashboard"  component={Dashboard} />
        <Stack.Screen name="AboutUs"    component={AboutUs} />
     
  </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
        {/* <Header
          backgroundColor='#2ECC71'
          centerComponent={<Image source={require("./src/assets/logo1.png")} style={{ width: 165, height: 50 }}
          />}
        /> */}
      <Drawer.Navigator initialRouteName="Screen" headerMode="none" >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="AboutUs"  component={AboutUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}