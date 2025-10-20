import express from "express";
import dotenv from "dotenv";
import bruxoRoutes from './src/routes/bruxoRoute.js';

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Olá mundo.");
});

app.use('/bruxos', bruxoRoutes);

app.listen(serverPort, () => {
    console.log(`Servidor online em: http://localhost:${serverPort}`);
});