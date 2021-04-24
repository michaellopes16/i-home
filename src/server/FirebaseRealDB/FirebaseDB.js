// database/firebaseDb.js
import { database, firebase} from '../../../Setup';
import  React, {useState} from "react";


// const reference = database().ref('/coletas/000001');
// //Ler o dado uma única vez
// database()
//   .ref('/coletas/000001')
//   .once('value')
//   .then(snapshot => {
//     console.log('User data: ', snapshot.val());
// });

//   //Mudanças feitas em tempo real
// database()
//   .ref('/users/123')
//   .on('value', snapshot => {
//     console.log('User data: ', snapshot.val());
// });

//   // Escuta apenas um filho específico do nó
// function User({ userId }) {
//     useEffect(() => {
//       const onChildAdd = database()
//         .ref('/users')
//         .on('child_added', snapshot => {
//           console.log('A new node has been added', snapshot.val());
//         });
  
//       // Stop listening for updates when no longer required
//       return () =>
//         database()
//           .ref('/users')
//           .off('child_added', onChildAdd);
//     }, [userId]);
// }

// //Inserindo valores
// database()
//   .ref('/users/123')
//   .set({
//     name: 'Ada Lovelace',
//     age: 31,
//   })
//   .then(() => console.log('Data set.'));

// // Atualizando valores
// database()
//   .ref('/users/123')
//   .update({
//     age: 32,
//   })
//   .then(() => console.log('Data updated.'));

// //Gerandi uma instância com ID automático [PUSH]
// const newReference = database()
//   .ref('/users')
//   .push();

// console.log('Auto generated key: ', newReference.key);

// //Grando dado com ID automático
// newReference
//   .set({
//     age: 32,
//   })
//   .then(() => console.log('Data updated.'));

//Remover dados
// await database()
//   .ref('/users/123')
//   .remove();
// //ou
// await database()
//   .ref('/users/123')
//   .set(null);
// const firebaseConfig = {
//     apiKey: "AIzaSyAovdEW-B8bmA1ZMUJ-cylFIDY-fYvKw1Y",
//     authDomain: "i-home2.firebaseapp.com",
//     projectId: "i-home2",
//     storageBucket: "i-home2.appspot.com",
//     messagingSenderId: "328547132507",
//     appId: "1:328547132507:web:b08061d31eeb0ad28e4b7e",
//     measurementId: "G-GGGB2ZLJ6Y",
//     persistence:true
//   }
// if(!firebase.apps.length){
//     const firebaseApp = firebase.initializeApp(firebaseConfig);
// }

class FirebaseDB extends React.Component{
   //Inseri coleta com ID randomico (tirar atributo ligado)
    constructor(callback) {
        super();
        this.state = {
            todos: {'':''},
        };
    }
    ComponentDidMount (){
        this.setState({todos: {'':''}})
    }
    
    insertColeta () {
        alert('Chegou no DB');
        const newReference = database()
                .ref('/coletas')
                .push();
        alert('Criou o ID');
        newReference
            .set({
                irrigacao: '2',
                umidade: '200',
                nivel:'1',
                data:'21/03/2021',
                hora:'21:50' 
            })
            .then(() => console.log('Data updated.'));
    }
    //Ligar bomba: Atualiza valor apenas no nó bomba
    //Analisar se é necessário fazer isso para todos os nós de coleta (acho que não)
    ligarDesligar (value) {
        const newReference = database()
        .ref('/bomba')
        .update({
           status: value,
        })
        .then(() => console.log('Bomba atualizada.'));
        if(value==0){
            alert('Bomba Desligada');
        }else{
            alert('Bomba Ligada');
        }
    }
    getStatusBomba(){
        return new Promise(function(resolve, reject){
            database()
            .ref('/bomba')
            .once('value').then(snapshot => {
                resolve(snapshot.val())
                console.log(snapshot.val().status)
                //alert('valor de status '+snapshot.val().status)
            }).catch((err)=>{
                reject(err)
            })
         });
    }
    getStatusReservatorio(){
        return new Promise(function(resolve, reject){
            database()
            .ref('/nivel')
            .once('value').then(snapshot => {
                resolve(snapshot.val())
                console.log(snapshot.val().status)
                //alert('valor de status '+snapshot.val().status)
            }).catch((err)=>{
                reject(err)
            })
         });
    }
    getStatusReservatorio2(callback){
       //var result = 0
        database()
            .ref('/nivel')
            .on('value', function (snapshot){
                //resolve(snapshot.val())
                //result  = 
                callback(snapshot.val());
            });
    }
    getColetas(callback){
        //return new Promise(function(resolve, reject){
            lists = [];
            database()
            .ref('/coletas')
            .orderByChild('data')
            .limitToFirst(15)
            .on('value', function (snapshot){
                //resolve(snapshot.val())
                snapshot.forEach(element => {
                    lists.push({ irrigacao: element.val().irrigacao, data: element.val().data, hora: element.val().hora,umidade: element.val().umidade})
                });
                callback(lists);
            });
        }
}

const firebaseDB = new FirebaseDB();
export default firebaseDB;