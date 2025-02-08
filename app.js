import express from "express";
import mongoose  from "mongoose"; // Realiza a conexão com o banco 
import bcrypt from "bcrypt"; // Criptografa a senha 
import jwt from "jsonwebtoken"; // Cria e valida tokens JWT
import dotenv from "dotenv"; // Variaveis de ambiente do arquivo .env

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Bem vindo a nossa API"});
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@clusterapi.tllqw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAPI`
)
.then(() => {
    app.listen(3000);
    console.log("Conectou ao Banco!");
})
.catch((err) => console.log(err));

