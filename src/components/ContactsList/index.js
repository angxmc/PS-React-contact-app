// import { useState, useEffect } from "react";
import ContactItem from "../ContactItem";
// this is rendered under the Main component
function ContactsList(props) {
  const {contacts} = props;
  // == State ============
  // const [contacts, setContacts] = useState(null);

  // - fetch data from API when component mounts for the first time
  /* 
    = useEffect
    - it connects to and synchronize with external systems
  */
  // useEffect(() => {
     // this [] tells the browser to not re-render infinitely, only the first time
     //mount: when the component is render to the screen. in const []

    // - we the fetch data to be async, so it can await for the result
  //   const fetchData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setContacts(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h2>Contacts List</h2>

      <>
        {/* as this is pulling the data, if there is data in contact, it ill show the contact name, if not, it will show No Contact Found */}

        {contacts ? (
          // each item(contact) is passed into the component ContactItem
          contacts.map((item) => <ContactItem key={item.id} contact={item}/>)
        ) : (
          <h3>No Contact Found</h3>
        )}
      </>
    </div>
  );
}

export default ContactsList;
