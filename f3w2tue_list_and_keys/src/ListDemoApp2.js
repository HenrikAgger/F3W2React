import React, {useState} from "react";

function MemberRow({member}){
    return(
        <tr>
            <td>{member.name}</td>
            <td>{member.age}</td>
        </tr>
    )
}

function MemberTable({ members }) {
  return (
    <table>
      <thead></thead>
      <tbody>{members.map((m,index) => <MemberRow key={index} member = {m}/>)}</tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members = {props.members}/>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
