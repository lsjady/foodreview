import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


const login = express.Router();

login.post('/', async (req, res) => {
    // Receber as informacoes de LOGIN
   const { email, password } = req.body;

   // Buscar EMAIL no banco de dados e armazenar
    const registeredUser = await User.findOne(
        { where: { email }}
   ).catch(
        (err) => {
            console.log("Error: ", err);
        }
   );

   if (!registeredUser)
        return res
            .status(400)
            .json({message: "Email ou senha inválidos."})

    // validar a senha do usuario
    if (!bcrypt.compareSync(password, registeredUser.password))
        return res
            .status(400)
            .json({message: "Email ou senha inválidos."})

     //Geração do TOKEN       
    const token = jwt.sign(
     // PLAYLOAD: o que será armazenado no TOKEN   
        {
            id: registeredUser.id,
            email: registeredUser.email
        },
        // secret or private key
        process.env.JWT_SECRET,
        // Options
        {
            expiresIn: '1h'
        }
    );

    // envia confirmação e token para usuario
    res.json({
        message: "Bem-vindo!",
        token: token
    })
});

export default login;