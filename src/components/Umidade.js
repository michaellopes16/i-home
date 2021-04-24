import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import FirebaseDB from '../server/FirebaseRealDB/FirebaseDB'
export default function Umidade (){
const list = [
    {
      hora: 'Data e hora:',
      data: 'av-timer',
      irrigacao:'0'
    },
    {
      hora: 'Data e hora:',
      data: 'av-timer',
      irrigacao:'0'
    },
    {
      hora: 'Data e hora:',
      data: 'av-timer',
      irrigacao:'0'
    },
    {
      hora: 'Data e hora:',
      data: 'av-timer',
      irrigacao:'0'
    },      
   // more items
  ]
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
      promiseB = result.status
      if(result.status==1){
        seTextButton('Desligar')
        console.log("Atualizando imagem para on ")
      }else{
        seTextButton('Ligar')
        console.log("Atualizando imagem para off ")
      }
 });
}
const [listIrrigacao, seTListIrrigacao] = useState([{irrigacao:"",umidade:"",nivel:"",data:"",hora:""}]); 
useEffect(() => {
   getColetas();
   return () => {
    console.log("This will be logged on unmount");
  }
});

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
                        <ListItem.Title style={{fontSize:17, fontWeight:'bold'}}>Valor Umidade</ListItem.Title>
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
                           <ListItem.Title>{item.umidade}</ListItem.Title>
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
                           <ListItem.Title>{item.umidade+" Litros"}</ListItem.Title>
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
            </View>
          </View>
      );
}


const styles = StyleSheet.create({
  container:{
      flex:5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#FFF"
  },
  scrollView:{
    height:500
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