import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";

import css from "./App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function App() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}

export default App;
