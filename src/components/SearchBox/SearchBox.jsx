import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectContactFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectContactFilter);

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
        type="text"
      />
    </div>
  );
};
export default SearchBox;
