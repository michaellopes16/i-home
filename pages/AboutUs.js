import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function AboutUs (){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Sobre nós</Text>
            </View>
        );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#FFF"
    },
    text:{
        color:"#161924",
        fontSize:28,
        fontWeight: "500"
    }
})