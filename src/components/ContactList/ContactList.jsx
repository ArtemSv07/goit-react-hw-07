import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";

import { selectFiltered } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFiltered);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.listBox}>
      {filteredContacts.map((element) => (
        <li className={css.list} key={element.id}>
          <Contact data={element} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
