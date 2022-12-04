import mongoose from "mongoose";
const usuarioSchema = new mongoose.Schema (
    {
        nombreUsuario: {
            type: String,
            require: true,
        

        },
        password: {
            type: String,
            require: true,
        },
        correo: {
            type: String,
            require: true,
            unique:true

        }
        
    },
    {
        timestamps: true,
        versionKey: false,
    }

);
//export default mongoose.model("usuario",usuario.Schema);
export const usuario = mongoose.model('users', usuarioSchema);
export default usuario;
