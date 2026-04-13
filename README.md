# 📌 Implementação de IA com Node.js

Este projeto é uma API simples construída com **Node.js + Express** que integra um modelo de inteligência artificial para responder perguntas em português.

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Dotenv
- OpenAI SDK (usando API da Groq)
- Modelo: `llama-3.3-70b-versatile`

## 📂 Estrutura do projeto

```
Implementacao-IA/
│
├── implementacao-ia/
│   └── implementacao.js
│
├── routes/
│   └── questions.js
│
├── server.js
├── package.json
└── .env
```

## ⚙️ Como funciona

A aplicação:

1. Recebe uma pergunta via requisição HTTP
2. Envia essa pergunta para um modelo de IA
3. Retorna a resposta em português

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
CHAVE=sua_api_key_aqui
```

## ▶️ Como rodar o projeto

### 1. Instalar dependências

```
npm install
```

### 2. Rodar o servidor

```
node server.js
```

Servidor será iniciado em:

```
http://localhost:3000
```

## 📡 Rotas

### POST /questions

**Exemplo de requisição:**

```
{
  "pergunta": "O que é inteligência artificial?"
}
```

**Resposta esperada:**

```
{
  "resposta": "Inteligência artificial é..."
}
```

## ⚠️ Observações

- Certifique-se de que sua API Key está válida
- A base URL está configurada para uso com a Groq API

## 💡 Possíveis melhorias

- Adicionar tratamento de erros
- Criar autenticação
- Implementar logs
- Criar frontend para consumo da API
- Cache de respostas

## 👨‍💻 Autor

Bruno Rafael
