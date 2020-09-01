import { createStore } from "redux";
import contactsReducers from "./contacts/contactsReducers";

const store = createStore(contactsReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;
