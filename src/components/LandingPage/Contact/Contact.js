import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Formik, Field, Form } from "formik";

import ContactCSS from "./Contact.css";

// CSS
const useStyles = makeStyles({ ...ContactCSS });

// Driver component
function Contact(props) {
  const classes = useStyles();

  return (
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
          }).then();
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
  );
}

export default Contact;
