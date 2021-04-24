import React from 'react'
import {View, StyleSheet, ImageBackground} from 'react-native'
import { Card,  Button } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Screen({navigation}){
        return(
            <ImageBackground source={require('../src/assets/background2.png')} style={styles.backgroundImage}>   
            <View style={{backgroundColor:'rgba(52, 52, 52, 0.0)',flex:2, flexDirection:"column",justifyContent:"center",alignItems:"center", height:"50%", width:"100%"}}>
                    <View style={styles.container}> 
                        <View style={{backgroundColor:'rgba(100, 52, 52, 0.0)',width:200,height:300,marginHorizontal:10}}>
                            <Card>
                                <Card.Title>Irrigação</Card.Title>
                                <Card.Divider/>
                                <Card.Image 
                                source={require('../src/assets/rega.png')}>
                                </Card.Image>
                                <Button
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, 
                                        marginRight: 0, marginBottom: 0, marginTop:10, alignItems:"center"}}
                                    title='Histórico' 
                                    type='outline'
                                    onPress={() => navigation.navigate('Irrigacao')}                                                           
                                    />
                            </Card>
                        </View>
                        <View style={{backgroundColor:'rgba(52, 52, 100, 0.0)',width:220,height:300, marginHorizontal:10}}>
                            <Card>
                                <Card.Title>Nível D'água</Card.Title>
                                <Card.Divider/>
                                <Card.Image 
                                source={require('../src/assets/nivel1.png')}>
                                </Card.Image>
                                <Button
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, 
                                        marginRight: 0, marginBottom: 0, marginTop:10, alignItems:"center"}}
                                    title='Visualizar' 
                                    type='outline'
                                    onPress={() => navigation.navigate('NivelDagua')}
                                    />
                            </Card>
                        </View>
                    </View>
                    <View style={styles.container2}> 
                        <View style={{backgroundColor:'rgba(52, 52, 100, 0.0)',width:220,height:300,marginHorizontal:10}}>
                            <Card>
                                <Card.Title>Umidade</Card.Title>
                                <Card.Divider/>
                                <Card.Image 
                                source={require('../src/assets/umidade.png')}>
                                </Card.Image>
                                <Button
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, 
                                        marginRight: 0, marginBottom: 0, marginTop:10, alignItems:"center"}}
                                    title='Histórico' 
                                    type='outline'
                                    onPress={() => navigation.navigate('Umidade')}
                                    />
                            </Card>
                        </View>
                        <View style={{backgroundColor:'rgba(52, 52, 52, 0.0)',width:220,height:300, marginHorizontal:10}}>
                            <Card>
                                <Card.Title>Dashboards</Card.Title>
                                <Card.Divider/>
                                <Card.Image 
                                source={require('../src/assets/statistics.png')}>
                                </Card.Image>
                                <Button
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, 
                                        marginRight: 0, marginBottom: 0, marginTop:10, alignItems:"center"}}
                                    title='Visualizar' 
                                    type='outline'
                                    onPress={() => navigation.navigate('Dashboard')}
                                    />
                            </Card>
                            
                        </View>
                    </View>
            </View>
            </ImageBackground>
            
        );
}
const styles = StyleSheet.create({
    container:{
        flex:5,
        flexDirection: "row",
        justifyContent: 'space-around',
        //marginBottom:10,
        //marginVertical:40,
        backgroundColor:'rgba(52, 52, 52, 0.0)',
        alignItems:"center",
        alignContent:"center",
        //width:"80%",
    },
    container2:{
        flex:5,
        flexDirection: "row",
        justifyContent: 'space-around',
        //marginBottom:10,
        //marginVertical:40,
        //alignItems:"center",
        alignContent:"center",
        backgroundColor:"rgba(52, 52, 52, 0.0)",
        //width:"80%",
    },
    text:{
        color:"#161924",
        fontSize:28,
        fontWeight: "500"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      backgroundImage:{
        alignContent: "center",
        alignItems:"center",
        justifyContent:"center",
        flex: 1,
        width: wp('100.0%'),
        height: hp('100.0%'),
        resizeMode: 'repeat'
      },
})