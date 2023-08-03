import { useContext } from "react";
import { ContactsContext } from "../../context/contactsContext";
//we want to export this component and export in the contact list

function ContactItem(props) {

  const contactCtx = useContext(ContactsContext);
  const dispatch = contactCtx;

  const { name, email, phone,id } = props.contact;
  return (
    <div>
      {/* display some data for each contact */}
      <h4>{name}</h4>
      <h5>{email}</h5>
      <h5>{phone}</h5>
      <button onClick={() => dispatch({ type: "delete_contact", payload: id })}>
        Delete
      </button>
    </div>
  );
}
export default ContactItem;
