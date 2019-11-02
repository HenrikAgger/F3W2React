import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormDemo from './FormDemo';

import App2 from './FormDemoMultiple'

let app = <FormDemo/>

const DontUseMeForReal = () => {
    return (
        <div className="App">
         <a href="/"  className="x" onClick={handleSelect} id="FormDemo">ex1</a> &nbsp;
         <a href="/"  className="x" onClick={handleSelect} id="app2">ex2</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "FormDemo": app = <FormDemo />; break;
        case "app2": app = <App2 />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));

