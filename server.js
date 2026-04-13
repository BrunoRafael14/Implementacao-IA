import express from 'express';
import dotenv from 'dotenv';
import questionsRouter from '../Implementacao-IA/routes/questions.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/questions', questionsRouter)


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});