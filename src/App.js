import React from 'react';
import styled from 'styled-components';
import TodoList from './Todos/TodoList';
import './App.css';
const AppContainer =styled.div ` 
margin: 1rem;
font-family:Arial,Helvetica,sans-serif;
color:#222222;
width: 100vw;
height:100vh;
`
function App() {
  return (
    <AppContainer>
   <TodoList/>
  </AppContainer>
  );
}

export default App;
