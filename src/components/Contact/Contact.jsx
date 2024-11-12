import s from "./Contact.module.css";
import { GiNinjaHead } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <div className={s.contact_data}>
        <div className={s.contact_icon}>
          <GiNinjaHead className={s.icon} />
          <p className={s.contact_name}>{name}</p>
        </div>
        <div className={s.contact_icon}>
          <FaPhoneAlt className={s.icon} />
          <p className={s.contact_number}>{number}</p>
        </div>
      </div>
      <button
        onClick={() => deleteContact(id)}
        className={s.btn_delete}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
