import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Card,  Button } from 'react-native-elements'
import FirebaseDB from '../server/FirebaseRealDB/FirebaseDB'

export default function NivelDagua({navigation}){

    function getStatus(){
        //const status = FirebaseDB.getStatusReservatorio2();
        FirebaseDB.getStatusReservatorio2(result =>{
        //status.then(function(result) {
            console.log()
            if(result.valor ==2){
              //setImg(require('../assets/power-on.png'))
              changeLogo(require('../assets/nivel1.png'))
              seTextButton('Nível 2: Reservatório cheio!')
              console.log("Reservatório cheio!")
            }else if(result.valor ==1){
              //setImg(require('../assets/power-off.png'))
              changeLogo(require('../assets/nivel2.png'))
              seTextButton('Nível 1: Reservatório pela metade!')
              console.log("Reservatório pela metade!")
            }else{
              changeLogo(require('../assets/nivel0.png'))
              seTextButton('Nível 0: Você deve encher o reservatório!')
              console.log("Nível 0: Você deve encher o reservatório!")
            }
        //});
    });
       
      }
    function changeLogo(uri_) {
        console.log('URI Value!'+uri_);
        setUri(uri_);
    }
    const [uriSource, setUri] = useState(require('../assets/nivel2.png'));
    const [textButton, seTextButton] = useState('Nível 2: Reservatório cheio!');
    
    useEffect(() => {
       getStatus();
       return () => {
        console.log("This will be logged on unmount");
      }
    },[textButton]);
    return(
        <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>
          <View style={styles.container}>
            <Card>
                <Card.Title>Nível de Água atual</Card.Title>
                    <Card.Divider/>
                        <View style={{height:hp('45%')}}>
                            <Card.Image
                                style={styles.image}
                                source={uriSource}
                                resizeMode='cover'
                            ></Card.Image>
                            <Text style={styles.TextStyle}> {textButton} </Text>
                        </View>
                        
            </Card>
            </View>
        </ImageBackground>  
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        justifyContent: 'space-around',
        //marginBottom:10,
        //marginVertical:40,
        backgroundColor:'rgba(52, 52, 52, 0.0)',
        alignItems:"center",
        alignContent:"center",
        width: wp('65.0%'),
        height: hp('50.0%'),
    },
    TextStyle:{
        flex:1,
        alignContent:'center',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        fontSize:17,
        fontWeight:'bold'
      },
    image: {
        width:wp('60%'),
        height:hp('40%')
      },
      backgroundImage:{
        alignContent: "center",
        alignItems:"center",
        justifyContent:"center",
        flex: 1,
        width: wp('100.0%'),
        height: hp('90.0%'),
        resizeMode: 'repeat'
      },
})