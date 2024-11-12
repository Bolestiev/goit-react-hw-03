import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ onFilter, filter }) => {
  const id = useId();
  return (
    <div className={s.input_wrapper}>
      <label className={s.input_label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        placeholder="Enter name"
        className={s.input}
        type="text"
        id={id}
        name="find"
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
