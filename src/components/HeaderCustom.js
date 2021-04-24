import React from 'react';


import { View, StyleSheet, Text } from 'react-native';
import {Header, Button} from 'react-native-elements';
export default function HeaderCustom(){
    return(
      <View style={styles.header}>
        <View>
            <Text style={styles.headerText}>i-Home</Text>
        </View>
      </View>  
    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',     
    },
    headerText:{
        fontWeight:'bold',
        fontSize:22,
        color: '#333',

    }
});