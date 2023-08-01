//we want to export this component and export in the contact list
function ContactItem(props) {
    console.log(props);
  const { name, email, phone } = props.contact;
  return (
    <div>
      {/* display some data for each contact */}
      <h4>{name}</h4>
      <h5>{email}</h5>
      <h5>{phone}</h5>
    </div>
  );
}
export default ContactItem;
