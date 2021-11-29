const AboutCSS = {
  root: {
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-black)",
    backgroundColor: "var(--background-white)",

    "& a:hover": {
      textDecoration: "none",
    },
  },

  image: {
    width: "100%",
  },

  header: {
    height: "0",
    width: "100%",
    paddingRight: "2rem",
    position: "relative",
    bottom: "4rem",
    fontFamily: "Dosis, sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "bold",
    textAlign: "right",
    color: "var(--text-white)",
  },

  text: {
    padding: "1rem 2rem",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
    textAlign: "justify",
  },

  button: {
    width: "150px",
    padding: "0.5rem",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "normal",
    textAlign: "center",
    color: "var(--text-black)",
    backgroundColor: "var(--background-button)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    image: {
      height: "200px",
    },

    header: {
      paddingRight: "4rem",
      bottom: "7rem",
      fontSize: "var(--tabView-2)",
    },

    text: {
      padding: "1rem 4rem",
    },

    button: {
      width: "200px",
      fontSize: "var(--tabView-2)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    image: {
      height: "300px",
    },

    header: {
      paddingRight: "6rem",
      bottom: "10rem",
      fontSize: "var(--desView-2)",
    },

    text: {
      padding: "1rem 6rem",
    },

    button: {
      width: "200px",
      fontSize: "var(--desView-2)",
    },
  },
};

export default AboutCSS;
