import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, Image,ScrollView, TouchableOpacity,Dimensions} from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import FirebaseDB from '../server/FirebaseRealDB/FirebaseDB'

//const [data, setData] = userState('');
//const [irrigacao, setIrrigacao] = userState('');
//openRealm();
//Verificar como mudar imagen
export default function Irrigacao (){

  //entender como pegar valor pelo indice
  //const listImg = ['../assets/power-off.png','../assets/power-on.png']
  const list = [
      {
        hora: 'Data e hora:',
        data: 'av-timer',
        irrigacao:'2'
      },
      {
        hora: 'Data e hora:',
        data: 'av-timer',
        irrigacao:'2'
      },
      {
        hora: 'Data e hora:',
        data: 'av-timer',
        irrigacao:'2'
      },
      {
        hora: 'Data e hora:',
        data: 'av-timer',
        irrigacao:'2'
      },      
     // more items
    ]
  function insertColetas(){
    FirebaseDB.insertColeta();
  }
  function getColetas(){
    console.log("-----------------------")
    FirebaseDB.getColetas(lists =>{
      const sortProperty = lists.sort((a, b) => (a > b) ? 1 : -1)
      seTListIrrigacao(sortProperty)
      console.log(sortProperty)
    });
  }
  
  function getStatus(){
    const status = FirebaseDB.getStatusBomba();
    
    status.then(function(result) {
        if(result.status==1){
          //setImg(require('../assets/power-on.png'))
          changeLogo(require('../assets/power-on.png'))
          seTextButton('Desligar')
          console.log("Atualizando imagem para on ")
        }else{
          //setImg(require('../assets/power-off.png'))
          changeLogo(require('../assets/power-off.png'))
          seTextButton('Ligar')
          console.log("Atualizando imagem para off ")
        }
   });
  }
  function ligarDesligarBomba(){
    
    const status = FirebaseDB.getStatusBomba();
   // insertColetas()
    status.then(function(result) {
        promiseB = result.status
        if(result.status==1){
          changeLogo(require('../assets/power-off.png'))
          seTextButton('Ligar')
          FirebaseDB.ligarDesligar(0)
        }else{
          changeLogo(require('../assets/power-on.png'))
          seTextButton('Desligar')
          FirebaseDB.ligarDesligar(1)
        }
   });
  }
  function changeLogo(uri_) {
    console.log('URI Value!'+uri_);
    setUri(uri_);
  }
  const [listIrrigacao, seTListIrrigacao] = useState([{irrigacao:"",humidade:"",nivel:"",data:"",hora:""}]); 
  useEffect(() => {
     getColetas();
     return () => {
      console.log("This will be logged on unmount");
    }
  });
  
  const [uriSource, setUri] = useState(require('../assets/power-off.png'));
  const [textButton, seTextButton] = useState('Desligar');
  
  useEffect(() => {
     getStatus();
     return () => {
      console.log("This will be logged on unmount");
    }
  },[listIrrigacao]);
        return(
            <View>
              <View>
                <ScrollView style={styles.scrollView}>
                <ListItem>
                        <ListItem.Content>
                        <ListItem.Title style={{fontSize:17, fontWeight:'bold'}}>Hora Coleta</ListItem.Title>
                        </ListItem.Content> 
                        <ListItem.Content>
                        <ListItem.Title style={{fontSize:17, fontWeight:'bold'}}>Data Coleta</ListItem.Title>
                        </ListItem.Content> 
                        <ListItem.Content>
                        <ListItem.Title style={{fontSize:17, fontWeight:'bold'}}>Litros usados</ListItem.Title>
                        </ListItem.Content>  
                  </ListItem>
                    {listIrrigacao ? 
                    listIrrigacao
                    .map((item, i) => (
                        <ListItem key={i} bottomDivider>
                            <Icon name={'av-timer'} />
                            <ListItem.Content>
                            <ListItem.Title>{item.hora}</ListItem.Title>
                            </ListItem.Content>
                            <Icon name={'calendar-today'} />
                            <ListItem.Content>
                             <ListItem.Title>{item.data}</ListItem.Title>
                            </ListItem.Content>
                            <Icon name={'water-damage'} />
                            <ListItem.Content>
                             <ListItem.Title>{item.irrigacao+" Litros"}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                      ))
                      :
                      list.map((item, i) => (
                        <ListItem key={i} bottomDivider>
                            <Icon name={'av-timer'} />
                            <ListItem.Content>
                            <ListItem.Title>{item.hora}</ListItem.Title>
                            </ListItem.Content>
                            <Icon name={'calendar-today'} />
                            <ListItem.Content>
                             <ListItem.Title>{item.data}</ListItem.Title>
                            </ListItem.Content>
                            <Icon name={'water-damage'} />
                            <ListItem.Content>
                             <ListItem.Title>{item.irrigacao+" Litros"}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                      ))
                    }
                  </ScrollView>
                </View>
                <View style={{alignItems:'center', 
                              marginTop:10,marginBottom:10,
                              justifyContent: 'center', 
                              textAlign:'center',
                              alignContent:'center'
                              }}>  
                <TouchableOpacity  
                  type='online'
                  title='On/Off'
                  onPress={()=> ligarDesligarBomba()}
                >
                    <Image
                      style={styles.stretch}
                      source={uriSource}
                    />
                    <Text style={styles.TextStyle}> {textButton} </Text>
                </TouchableOpacity >
              </View>
            </View>
        );
}

var screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container:{
        flex:5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#FFF"
    },
    scrollView:{
      height:screenHeight-160
    },
    text:{
        color:"#161924",
        fontSize:28,
        fontWeight: "500",
        alignContent:'center',
        textAlign:'center'
    },
    stretch:{
      width: 50,
      height: 50,
      alignItems:'center',
      resizeMode: 'stretch',
      alignContent:'center'
    },
    TextStyle:{
      flex:1,
      alignContent:'center',
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
    }
})