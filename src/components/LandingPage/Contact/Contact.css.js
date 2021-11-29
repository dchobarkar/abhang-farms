const ContactCSS = {
  root: {
    padding: "2rem 2rem",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& label": {
      width: "100%",
    },

    "& input": {
      width: "100%",
      marginBottom: "1rem",
      border: "none",
      backgroundColor: "var(--background-white)",
    },
    "& input:focus-visible": {
      outline: "none",
    },

    "& textarea": {
      height: "8rem",
      width: "100%",
      marginBottom: "1rem",
      border: "none",
      backgroundColor: "var(--background-white)",
    },
    "& textarea:focus-visible": {
      outline: "none",
    },

    " & button": {
      width: "150px",
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

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "2rem 4rem",
    },

    form: {
      flexDirection: "row",
      flexWrap: "wrap",

      "& label": {
        width: "30%",
        marginBottom: "1rem",
      },

      "& input": {
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
      padding: "2rem 6rem",
    },

    form: {
      width: "60vw",
      flexDirection: "row",
      flexWrap: "wrap",

      "& label": {
        width: "30%",
        marginBottom: "1rem",
      },

      "& input": {
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
