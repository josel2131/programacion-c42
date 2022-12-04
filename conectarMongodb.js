import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

export const URI = mongoose.connect(process.env.MON_DBURI).then(()=>{
    console.log("la conexion fue realizada con exito")
}).catch((error) => console.error("Problemas al conectar a la base de datos de mongodb"));

export default URI;


  
   
 
