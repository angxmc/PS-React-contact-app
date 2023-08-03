//
/**
 * @description store all state logic
 * @param {*} state: current state
 * @param {*} action: objects with teh type and payload
 * @returns
 */
export default function contactsReducer(state, action) {
  //going to contain a switch function
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    //returning new state with teh data from the API
    case "fetched_data":
      return [...payload];

      //this is triggered from ContactForm
    case "add_contact":
      return [...state, payload];
      case "delete_contact":
        const copyState=[...state];
        const newArr = copyState.filter(item => item.id !== payload)
        return [...newArr]
    default:
      return [];
  }
}
