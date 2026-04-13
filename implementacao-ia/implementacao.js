import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();
const client = new OpenAI({
    'apiKey': process.env.CHAVE,
    'baseURL': "https://api.groq.com/openai/v1"
});

const perguntarAoGPT = async (pergunta) => { 
    const completion = await client. chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: "Você Será um assistente para resposta de perguntas e retornará as perguntas em portugês do Brasil",
            },
            {
                role: "user",
                content: pergunta
            }
        ]
    });
    return completion.choices[0].message.content;
};

export default perguntarAoGPT