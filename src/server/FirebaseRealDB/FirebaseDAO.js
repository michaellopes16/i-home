import FirebaseApp from "@react-native-firebase/app"
import database from "@react-native-firebase/database"
import  React  from "react";
import firebaseDB from '../server/FirebaseDB'

class FirebaseDAO extends React.Component{
    insertColeta (){
        firebaseDB.insertColeta();
        alert('Tá no DAO');
    }

    updateColeta = () =>{
        alert('Coleta Atualizada');
    }
    getColeta = () =>{
        alert('Coleta recebida');
    }

    powerOnOff = () =>{
        alert('Ligando/Desligando bomba!')
    }
}
const firebaseDAO = new FirebaseDAO();
export default firebaseDAO;