import React from 'react';
import './App.css';
import person, {males, females} from "./file2";

console.log([...males, ...females]);
console.log([...males, "Kurt", "Helle", ...females, "Tina"]);
const {firstName, email} = person;

function App() {
  return (
    <div className="App">
        <p>{firstName} - {email}</p>
    </div>
  );
}

export default App;