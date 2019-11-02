import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {names} from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    return <h1>Hello, {props.person.firstName}, 
    {props.person.lastName}, 
    {props.person.email}
    </h1>
}


Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

function App() {
  return (
    <div className="App">
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Welcome />
        <Welcome name={45} />
        {names.map((p,index) => <WelcomePerson key={index} person = {p} />)}
    </div>
  );
}

export default App;