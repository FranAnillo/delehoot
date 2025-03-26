// backend/server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const Quiz = require('./models/Quiz'); // Importamos el modelo de Quiz

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost:27017/delehoot', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('No se pudo conectar a MongoDB:', error));

// Ruta para obtener todos los quizzes
app.get('/api/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener quizzes' });
  }
});

server.listen(3001, () => {
  console.log('Servidor corriendo en puerto 3001');
});
