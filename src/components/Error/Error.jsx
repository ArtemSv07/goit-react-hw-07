import { useSelector } from "react-redux";
import css from "./Error.module.css";

const Error = () => {
  const { error } = useSelector((state) => state.contacts);
  return <h2 className={css.text}>Oops something went wrong: {error}</h2>;
};
export default Error;
