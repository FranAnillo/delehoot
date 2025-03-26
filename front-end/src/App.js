// import logo from './logo.svg';
// import './App.css';

//   function App() {
//     return (
//       <div className="App">
//         <h1>¡Bienvenido a Delehoot!</h1>
//         <button onClick={() => console.log('Crear quiz')}>Crear Quiz</button>
//         <button onClick={() => console.log('Unirse a quiz')}>Unirse a Quiz</button>
//       </div>
//     );
//   }

// export default App;
import React, { useEffect, useState } from 'react';

function App() {
  const [quizzes, setQuizzes] = useState([]);

  // Usamos useEffect para hacer la petición cuando el componente se monte
  useEffect(() => {
    // Hacemos la petición al backend
    fetch('http://localhost:3001/api/quizzes')
      .then(response => response.json())
      .then(data => setQuizzes(data))  // Guardamos los quizzes en el estado
      .catch(error => console.error('Error al obtener los quizzes:', error));
  }, []); // El array vacío significa que solo se ejecutará una vez cuando el componente se monte

  return (
    <div className="App">
      <h1>Lista de Quizzes</h1>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz._id}>{quiz.title}</li>  // Muestra el título de cada quiz
        ))}
      </ul>
    </div>
  );
}

export default App;
