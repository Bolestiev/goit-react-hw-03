import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contactsData from "../assets/data.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContactsList = localStorage.getItem("contacts");
    return savedContactsList ? JSON.parse(savedContactsList) : contactsData;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContact = (values, actions) => {
    setContacts((prevContacts) => [...prevContacts, values]);

    actions.resetForm();
  };

  const filterContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onFilter={setFilter} filter={filter} />
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
