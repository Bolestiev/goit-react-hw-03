import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Invalid format! Expected format: XXX-XX-XX"
    )
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const onSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact, actions);
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.labelWrapper}>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            placeholder="Enter Name"
            className={s.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={s.errorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={s.labelWrapper}>
          <label className={s.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            placeholder="Enter Number"
            className={s.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={s.errorMessage}
            name="number"
            component="span"
          />
        </div>
        <button className={s.btn_submite} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
