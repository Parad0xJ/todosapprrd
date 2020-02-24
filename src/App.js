import React from 'react';
import './App.css';
import { CallTodos } from './CallTodos'

function App() {
  return (
    <div className="App">
          <CallTodos />
          <Footer />
    </div>
  );
}

export default App;

const Footer = () =>{
  return(
      <div className='jumbotron footer py-2'>
          <h4>Todos React App</h4>
         <p className='lead'>I’ve been learning React for a few months and I’m doing a few little apps like this to practice React.<br/>
         For this app I would like to try  react-router-dom & HashRouter</p>
         <p>I used : Create-React-App - React-Router-Dom - Bootstrap IV - Axios - <a href="https://jsonplaceholder.typicode.com/">Json placeHolder API</a></p>
         <p>© Fevrier 2020 Laurent CAMINADE</p>
      </div>
  )
}