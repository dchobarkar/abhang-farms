const ContactCSS = {
  root: {
    padding: "3rem 2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
    color: "var(--text-white)",
    backgroundColor: "var(--background-green)",
  },

  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& label": {
      width: "100%",
      paddingBottom: "0.5rem",
    },

    "& input": {
      height: "1.75rem",
      width: "100%",
      padding: "0.5rem",
      marginBottom: "1rem",
      border: "none",
      borderRadius: "0.5rem",
      backgroundColor: "var(--background-white)",
    },
    "& input:focus-visible": {
      outline: "none",
    },

    "& textarea": {
      height: "8rem",
      width: "100%",
      padding: "0.5rem",
      marginBottom: "1rem",
      border: "none",
      borderRadius: "0.5rem",
      backgroundColor: "var(--background-white)",
    },
    "& textarea:focus-visible": {
      outline: "none",
    },

    " & button": {
      width: "150px",
      padding: "0.5rem",
      marginTop: "1rem",
      fontFamily: "Montserrat,sans,serif",
      fontSize: "var(--text-3)",
      fontWeight: "normal",
      border: "none",
      color: "var(--text-black)",
      backgroundColor: "var(--background-button)",
    },
    "& botton:selected": {
      border: "none",
    },
  },

  modalText: {
    paddingBottom: "1rem",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "5rem 4rem",
    },

    form: {
      flexDirection: "row",
      flexWrap: "wrap",

      "& label": {
        width: "30%",
      },

      "& input": {
        height: "2rem",
        width: "70%",
        marginBottom: "1rem",
      },

      "& textarea": {
        height: "8rem",
        width: "70%",
        marginBottom: "1rem",
      },

      " & button": {
        height: "50px",
        width: "200px",
        marginTop: "1rem",
      },
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "6rem 6rem",
    },

    form: {
      width: "50vw",
      flexDirection: "row",
      flexWrap: "wrap",

      "& label": {
        width: "20%",
      },

      "& input": {
        height: "2rem",
        width: "70%",
        marginBottom: "1rem",
      },

      "& textarea": {
        height: "8rem",
        width: "70%",
        marginBottom: "1rem",
      },

      " & button": {
        height: "50px",
        width: "200px",
        marginTop: "1rem",
      },
    },
  },
};

export default ContactCSS;
