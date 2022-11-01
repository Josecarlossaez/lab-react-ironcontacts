import contactsArr from "./contacts.json"
import './App.css';
import {useState} from "react"


function App() {
  const contacts = contactsArr.slice(0,5)
const [list, setList] = useState(contacts)

  return (
    <div className="App">
<h2>IronContacts</h2>
<table>
 <thead>
  <tr>

    <th>Picture</th>

    <th>Name</th>

    <th>Popularity</th>

  </tr>
 </thead>

  
  <tbody>
  {list.map((eachContact) => {
    return(

     <tr key={eachContact.id}>

        <td><img src={eachContact.pictureUrl} alt="picture" width="50px"/></td>

        <td>{eachContact.name}</td>

       <td>{eachContact.popularity.toFixed(2)}</td>

     </tr>
)
   

    
  })}
   </tbody>
</table>
  

    </div>
  );
}

export default App;
