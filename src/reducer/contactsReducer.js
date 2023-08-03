//
/**
 * @description store all state logic
 * @param {*} state
 * @param {*} action
 * @returns
 */
export default function contactsReducer(state, action) {
  //going to contain a switch function
  const { type, payload } = action;

  switch (type) {
    case "fetched_data":
      return [...payload];
    case "add_contact":
      break;
    default:
      return [];
  }
}
