/*
>> Ref let s component hold some information that isn't used for rendering. 
- unlike State, this won't re-render your component. 
- when we have a <form>, it automatically refreshes the page when you click on submit. It will re-render the State, it's bad for application. 
= step 1: 
    -has to initialize, create an instance of useRef
= step 2
    - attach the created reference to the JSX tag
*/
import { useRef } from "react";
function ContactForm() {
  // =step1
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const handleSubmit = (e) =>{
    e.preventDefault(); //stops borwser from refreshing 

    const newContact = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value
    }
    console.log(newContact);
  }

  //=step 2
  return (
    <div>
      <h2>Create New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} />
        </div>

        <div>
          <label>Email: </label>
          <input type="text" ref={emailRef} />
        </div>

        <div>
          <label>Phone: </label>
          <input type="text" ref={phoneRef} />
        </div>

        <button>Create</button>
      </form>
    </div>
  );
}
export default ContactForm;
