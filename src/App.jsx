
import React from 'react';
import QuizApp from './Components/QuizApp/QuizApp';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import './App.css'
function App() {
  return (
    <>
    <div className="app-container">
      <h1>React Mini Projects</h1>
      <div className="projects-container">
        <QuizApp />
        <ShoppingCart />
      </div>
    </div>
    </>
  );
}

export default App;
