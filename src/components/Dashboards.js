import React, { useEffect, useState }  from 'react'
import {View, Text, StyleSheet, Dimensions } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import FirebaseDB from '../server/FirebaseRealDB/FirebaseDB'

export default function Dashboard (){

   function getColetas(){
    FirebaseDB.getColetas(lists =>{
    var auxIrri = []
    var auxUmi  = []
    var auxData = []
    //const sortProperty = lists.sort((a, b) => (a > b) ? 1 : -1)
    lists.forEach(element => {
      auxIrri.push(parseInt(element.irrigacao))
      auxUmi.push(parseInt(element.umidade))
      auxData.push(element.data)
    });
    setListIrrigacao({irrigacao:auxIrri,umidade:auxUmi, data:auxData})
  });
}

const [listIrrigacao, setListIrrigacao] = useState({irrigacao:[0],umidade:[0],data:[""],hora:[""]}); 
useEffect(() => {
  getColetas();
  return () => {
   console.log("Get data");
 }
});

const data = {
  labels: listIrrigacao.data,
  datasets: [
    {
      data: listIrrigacao.irrigacao,
        color: (opacity = 1) => `rgba(46, 134, 204, ${opacity})`, // optional
        strokeWidth: 5 // optional
      }
    ],
    legend: ["Litros por dia"] // optional
};
const data2= {
  labels: listIrrigacao.data,
  datasets: [
    {
      data: listIrrigacao.umidade,
        color: (opacity = 1) => `rgba(46, 134, 204, ${opacity})`, // optional
        strokeWidth: 5 // optional
      }
    ],
    legend: ["Humidade do solo por dia"] // optional
};

// const [umidade, setUmidade] = useState([])
// const [irrigacao, setIrrigacao] = useState([])
// const [data_, setData_] = useState([])

console.log("-- "+listIrrigacao.data)
console.log("-- "+listIrrigacao.umidade)
console.log("-- "+listIrrigacao.irrigacao)

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#2ECC71",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#2ECC3C",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(46, 134, 204, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
//const numRows = listIrrigacao.length

  function generateChart(data_){
   if(listIrrigacao != undefined){
    return(
      <LineChart
      data={data_}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      />
    )
   }else{
    return(
      <LineChart
      data={{
        labels: ["X","Y","Z"],
        datasets: [
          {
            data: [1,2,7],
            color: (opacity = 1) => `rgba(46, 134, 204, ${opacity})`, // optional
            strokeWidth: 5 // optional
            }
          ],
          legend: ["Litros por dia"] // optional
      }}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      />
    )
   }
  }
  return( 
    <View style={styles.container}>
        <Text style={styles.text}>Histórico de irrigação</Text>
        {generateChart(data)}
        <Text style={styles.text}>Histórico de coletas de humidade</Text>
        {generateChart(data2)}
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
        marginTop:15,
        color:"#161924",
        fontSize:24,
        fontWeight: "500",
        fontFamily: "Times"
    }
})