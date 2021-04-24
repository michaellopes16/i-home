import React from 'react';
import {View,Image,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function CustomDrawer ({...props}){
    return(
        <View>
            <Text>Bem vindo!</Text>
        </View>
    );
}

export default CustomDrawer;