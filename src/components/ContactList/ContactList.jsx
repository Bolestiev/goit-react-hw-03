import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map((contact) => {
        return (
          <li className={s.contact_item} key={contact.id}>
            <Contact
              deleteContact={deleteContact}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
