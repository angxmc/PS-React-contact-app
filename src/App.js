
//useReducer replaces the state
import { useState, useEffect, useReducer } from "react";
// =Step 1: import
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { ContactsContext } from "./context/contactsContext";
import contactsReducer from "./reducer/contactsReducer";

// contacts: global state
//dispatch: function that will send an action object to the reducer function

function App() {
  // = State lifted to here, Main
  // const [contacts, setContacts] = useState(null);
  const [contacts, dispatch] = useReducer(contactsReducer, null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      //dispatching an action to the reducer function
      dispatch({type:'fetched_data', payload: data})
    };
    fetchData();
  }, []);

  // const addNewContact = (newContact) => {
  //   setContacts([...contacts, newContact]);
  // };
  return (
    <ContactsContext.Provider value={{contacts, dispatch}}>
      <div className="">
        {/* step 2: call the function */}
        <Navbar />
        <Header title="Contacts App" />
        <Main />
      </div>
    </ContactsContext.Provider>
  );
}

export default App;
