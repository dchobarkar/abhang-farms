const OrderCSS = {
  root: {
    padding: "3rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--background-dark)",
  },

  header: {
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "bold",
  },

  text: {
    paddingTop: "1rem",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
    textAlign: "center",
  },

  container: {
    paddingTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    minHeight: "400px",
    width: "250px",
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "var(--text-black)",
    backgroundColor: "var(--background-white)",
  },

  boxHeader: {
    padding: "1rem 0",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--text-3)",
    fontWeight: "bold",
  },

  image: {
    width: "100%",
  },

  button: {
    height: "50px",
    width: "100%",
    marginTop: "1rem",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--text-3)",
    fontWeight: "normal",
    border: "none",
    color: "var(--text-white)",
    backgroundColor: "var(--background-green)",
  },

  totalText: {
    padding: "2rem 0 1rem 0",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "normal",
  },

  orderButton: {
    height: "50px",
    width: "180px",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--text-3)",
    fontWeight: "normal",
    border: "none",
    color: "var(--text-white)",
    backgroundColor: "var(--background-green)",
  },

  modal: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "var(--background-green)",
  },

  modalText: {
    padding: "1rem 0",
    textAlign: "center",
  },

  form: {
    width: "100%",
    padding: "1rem",
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

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "5rem 4rem",
    },

    header: {
      fontSize: "var(--tabView-2)",
    },
    container: {
      justifyContent: "space-around",
    },

    box: {
      margin: "1rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "6rem",
    },

    header: {
      fontSize: "var(--desView-2)",
    },

    container: {
      justifyContent: "space-around",
    },

    box: {
      margin: "1rem",
    },
  },
};

export default OrderCSS;
