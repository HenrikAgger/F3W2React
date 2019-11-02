import React, { useState } from "react";
 
function ListItem({number}){
    return <li>{number}</li>;
}
function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map((n) => <ListItem key={n} number={n} />);
  return  <ul>{listItems}</ul> ;
}
function ListTable({number}){
  return (
    <tr>
      <td>{number}</td>
    </tr>
  );
}
function NumberTable({ numbers}){
  const tableItems = numbers.map((n) => <ListTable key={n} number={n} />);
  return (
    <table>
      <tbody>
        {tableItems}
      </tbody>
    </table>
  )

}


function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
      <NumberTable numbers={props.numbers}/>
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
