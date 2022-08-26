import express from 'express';
import dotenvd from 'dotenv';
import router from './routes/routes.js';
import bodyParser from 'body-parser';


//Load config
dotenvd.config({ path: './config/config.env'});

//Run server
const server = express();
const PORT = process.env.PORT || 3000  ;
server.listen(PORT,console.log("servidor rodando em " + process.env.NODE_ENV + " na porta "+ PORT + " ..."));

//Define routes
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(router);