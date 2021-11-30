import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Formik, Field, Form } from "formik";

import Modal from "../../../customComponents/Modal/Modal";
import ContactCSS from "./Contact.css";

// CSS
const useStyles = makeStyles({ ...ContactCSS });

// Driver component
function Contact(props) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <section className={classes.root}>
        <Formik
          initialValues={{
            email: "",
            subject: "",
            message: "",
          }}
          onSubmit={async (values) => {
            const Query = {
              Email: values.email,
              Subject: values.subject,
              Message: values.message,
            };
            await fetch("https://formspree.io/mnqgqygy", {
              method: "POST",
              body: JSON.stringify(Query),
            })
              .then(setIsOpen(true))
              .catch((error) => {
                console.log(error.response);
              });
          }}
        >
          <Form className={classes.form}>
            <label htmlFor="email">Email :</label>
            <Field id="email" name="email" type="email" />

            <label htmlFor="subject">Subject :</label>
            <Field id="subject" name="subject" />

            <label htmlFor="message">Message :</label>
            <Field id="message" name="message" as="textarea" />

            <button type="submit">Send</button>
          </Form>
        </Formik>
      </section>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <p className={classes.modalText}>Thank you for your message.</p>
        <p className={classes.modalText}>We will get in touch shortly.</p>
      </Modal>
    </React.Fragment>
  );
}

export default Contact;
