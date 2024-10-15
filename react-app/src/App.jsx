import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Device name='Laptop' price='55' />
      <Device name='Mobile' price='90' />
      <Device name='PC' price='98' />
      <Student grade="7" marks="99" />
      <Student />
      <Student />
      <Student />
      <Developer />
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core"></Todo>
      <Todo task="try jsx"></Todo>

    </>
  );
}

function Device(props) {
  return <h2>This Device: {props.name} Price: {props.price}</h2>;
}

function Person() {
  const person = { name: 'Robiul', age: 12 };
  const age = 25;
  const money = 40;
  return <h3>I am {person.name} with an age of: {age + money}</h3>;
}

// Corrected the function declaration
function Student({ grade = "N/A", marks = "N/A" }) {
  console.log(grade, marks);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Grade: {grade}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid green',
    borderRadius: '20px',
  };

  return (
    <div style={developerStyle}>
      <h5>DevOps</h5>
      <p>Code</p>
    </div>
  );
}

export default App;
