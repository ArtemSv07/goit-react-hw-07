import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPerson className={css.phoneIcon} />
          {name}
        </p>
        <p className={css.contText}>
          <FaPhone className={css.phoneIcon} />
          {number}
        </p>
      </div>

      <button className={css.buttonDelete} onClick={handleDelete}>
        <span className={css.text}>Delete</span>
        <span className={css.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
          </svg>
        </span>
      </button>

      {/* <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button> */}
    </div>
  );
};

export default Contact;
