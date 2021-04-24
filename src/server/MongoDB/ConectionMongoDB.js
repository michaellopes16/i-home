import {getRealmApp} from "../server/MongoDB/getRealmApp";
import Realm from "realm";
import RepositorySchemas from "../RepositorySchemas";
let user;
let realm;
async function anonymousLogin() {
    //let user;
    try {
      const app = getRealmApp(); // pass in the appConfig variable that you created earlier
      const credentials = Realm.Credentials.anonymous(); // create an anonymous credential
      user = await app.logIn(credentials);
      return user;
    } catch (error) {
        throw `Error logging in anonymously: ${JSON.stringify(error,null,2)}`;
    }
  }
async function openRealm() {

    alert("OpenRealm");
    try {
      // ...
      console.log(`Logged in with the user: ${user.identity}`);
      const config = {
        schema: [RepositorySchemas.IHomeColectionSchema],
        sync: {
          user: user,
          partitionValue: "myPartition",
        },
      };
      realm = await Realm.open(config);
    } catch (error) {
        throw `Error opening realm: ${JSON.stringify(error,null,2)}`;
    }
}
export async function insertColeta(){
    try {
        const app = getRealmApp(); // pass in the appConfig variable that you created earlier
        const credentials = Realm.Credentials.anonymous(); // create an anonymous credential
        user = await app.logIn(credentials);
        return user;
      } catch (error) {
          throw `Error logging in anonymously: ${JSON.stringify(error,null,2)}`;
      }
    alert("OpenRealm");
    try {
      // ...
      console.log(`Logged in with the user: ${user.identity}`);
      const config = {
        schema: [RepositorySchemas.IHomeColectionSchema],
        sync: {
          user: user,
          partitionValue: "myPartition",
        },
      };
      realm = await Realm.open(config);
    } catch (error) {
        throw `Error opening realm: ${JSON.stringify(error,null,2)}`;
    }
    realm.write(() => {
        realm.create("IHomeColection", {
          _id: new ObjectId(),
          irrigacao: "2l",
          status: "Open",
        });
      });
      alert("InserColeta");
}

// const credentials = Realm.Credentials.anonymous();
// try {
//   const user = await app.getRealmApp().logIn(credentials);
// } catch(err) {
//   console.error("Failed to log in", err);
// }
// const mongoURI = "mongodb+srv://mlb:Pai1-mae1@cluster0.wjuxg.mongodb.net/cluster0?retryWrites=true&w=majority";
// mongoose.connect(mongoURI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// app.use(bodyParser.json())

// mongoose.connection.on("connected",()=>{
//     console.log("Connect Success")
// })

// mongoose.connection.on("error",(err)=>{
//     console.log("Error", error)
// })

// app.post('/send-data',(req, res)=>{
//     const employee = new Employee({
//         irrigacao: req.body.irrigacao,
//         ligado: req.body.ligado,
//         humidade: req.body.humidade,
//         nivel:req.body.nivel,
//         data:req.body.data,
//         hora:req.body.hora
//     })
//     employee.save()
//     .then(data => {
//         console.log(data)
//         res.send("success")
//     }).catch(err =>{
//         console.log(err)
//     })
// })

// app.get('/',(req, res)=>{
//     res.send("Weel como to node.js")
// })

// app.listen(3000,() =>{
//     console.log("Listening on 3000")
// })