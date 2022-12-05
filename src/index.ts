import { router } from './routes/router';
import express from 'express';
import path from 'path';
import { PORT } from './config';
import MySQLSessionStore from 'express-mysql-session';

const session = require('express-session');



const app = express();

const path_static_files = path.join(__dirname, "..", "public");

app.set("view engine", "ejs");

app.use(express.static(path_static_files));

app.use(express.urlencoded({extended:false}));

app.use("/", router);

app.listen(PORT, ()=>{
  console.log(`Escuchando en el puerto ${PORT}`);
});

