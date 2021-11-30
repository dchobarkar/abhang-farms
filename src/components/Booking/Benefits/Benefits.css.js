const BenefitsCSS = {
  root: {
    padding: "6rem 2rem 3rem 2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-black)",
    backgroundColor: "var(--background-white)",
  },

  header: {
    width: "100%",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "bold",
    textAlign: "center",
  },

  image: {
    width: "100%",
    padding: "1.5rem 2rem",
  },

  text: {
    padding: "0 2rem",
    fontFamily: "Lato, sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
    lineHeight: "1.5rem",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "8rem 4rem 5rem 4rem",
    },

    header: {
      paddingBottom: "1rem",
      fontSize: "var(--tabView-2)",
    },

    image: {
      width: "50%",
      paddingTop: "1rem",
    },

    text: {
      width: "50%",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "10rem 6rem 6rem 6rem",
    },

    header: {
      fontSize: "var(--desView-2)",
    },

    image: {
      width: "50%",
      paddingTop: "2rem",
    },

    text: {
      width: "50%",
      paddingLeft: "10rem",
    },
  },
};

export default BenefitsCSS;
