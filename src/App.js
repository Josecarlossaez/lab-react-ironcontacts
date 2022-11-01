import contactsArr from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const contacts = contactsArr.slice(0, 5);
  const [list, setList] = useState(contacts);

  const addContact = () => {
    // buscamos contacto aleatorio
    let randomContact =
      contactsArr[Math.floor(Math.random() * contactsArr.length)];
    //console.log(randomContact)
    // hacemos array nuevo y copiamos el aleatorio
    const copyList = [...list];
    // modificamos list añadiendo el aleatorio
    copyList.push(randomContact);
    setList(copyList);
  };
  const orderAlphaContact = () => {
    const copy = list.map((eachContact) => eachContact)
    copy.sort((eachContact1, eachContact2) => {
      if (eachContact1.name > eachContact2.name){
        return 1
      }else{
        return -1
      }
      
    })
   setList(copy)
  }
  const orderPopContact = () => {
    const copy = list.map((each) => each)
    copy.sort((each1, each2) => {
      if(each1.popularity > each2.popularity){
        return -1;
      }else{
        return 1;
      }
    })
    setList(copy)
  }

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={addContact}>Add Contact</button>
      <button onClick={orderAlphaContact}>Order Contact</button>
      <button onClick={orderPopContact}>Order Popularity</button>
      <table style={{margin:"0 auto"}} >
        <thead>
          <tr>
            <th>Picture</th>

            <th>Name</th>

            <th>Popularity</th>

            <th>Won Oscar</th>

            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>
          {list.map((eachContact) => {
            return (
              <tr key={eachContact.id}>
                <td>
                  <img
                    src={eachContact.pictureUrl}
                    alt="picture"
                    width="50px"
                  />
                </td>

                <td>{eachContact.name}</td>

                <td>{eachContact.popularity.toFixed(2)}</td>
                <td>{eachContact.wonOscar === true && `🏆`}</td>
                <td>{eachContact.wonEmmy === true && `🏆`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
