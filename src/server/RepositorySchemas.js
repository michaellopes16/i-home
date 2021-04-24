// const mongoose = require('mongoose')
// const EmployeeSchema = new mongoose.Schema({
//     irrigacao: Number,
//     ligado: Number,
//     humidade: Number,
//     nivel:Number,
//     data:String,
//     hora:String    
// })

// mongoose.model("employee",EmployeeSchema)
export default class RepositorySchemas{
  static IHomeColectionSchema = {
      name: 'IHomeColection',
      properties: {
        _id: {type:'objectId', indexed:true },
        dataColeta: 'string',
        horaColeta: 'string',
        irrigacao: 'string',
        status: 'string',
        umidade: 'string',
      },
      primaryKey: '_id',
    };
}