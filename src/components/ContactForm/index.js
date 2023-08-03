/*
>> Ref let component hold some information that isn't used for rendering. 
- unlike State, this won't re-render your component. 
- when we have a <form>, it automatically refreshes the page when you click on submit. It will re-render the State, it's bad for application. 
= step 1: 
    -has to initialize, create an instance of useRef
= step 2
    - attach the created reference to the JSX tag
*/

import { useRef, useState, useContext } from "react";
import { ContactsContext } from "../../context/contactsContext";
function ContactForm() {
  //we are using the ContactsContext
  const contactsCtx = useContext(ContactsContext);
  const { addNewContact } = contactsCtx;

  //>> use this every time when we create a form for user input
  // - using state to store the new input variable, ot hold formData.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // =step1
  /*  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef(""); */

  const handleSubmit = (e) => {
    e.preventDefault(); //stops browser from refreshing

    /* const newContact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    addNewContact(newContact); */
    const newContact = { ...formData, id: new Date() };
    addNewContact(newContact);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setFormData({
      //it's going to put what we already have here, then assign
      ...formData,
      //it's getting the value from <input> name: value
      // name: value
      //email:value
      //phone:value
      [e.target.name]: e.target.value,
    });
  };

  //=step 2
  // we need to bind the input to the State
  return (
    <div>
      <h2>Create New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />

          {/* <input type="text" ref={nameRef} /> */}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />

          {/* <input type="text" ref={emailRef} /> */}
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="text"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />

          {/* <input type="text" ref={phoneRef} /> */}
        </div>

        <button>Create</button>
      </form>
    </div>
  );
}
export default ContactForm;
