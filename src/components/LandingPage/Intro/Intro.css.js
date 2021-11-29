const IntroCSS = {
  root: {
    padding: "1rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--background-green)",
  },

  introduction: {
    paddingBottom: "0.5rem",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
    color: "var(--text-white)",
  },

  header: {
    padding: "0.5rem",
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "bold",
    textAlign: "center",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "1rem 4rem",
      flexDirection: "row",
    },

    introduction: {
      paddingRight: "0.5rem",
    },

    header: {
      fontSize: "var(--tabView-2)",
    },

    image: {
      width: "40vw",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "3rem 6rem",
      flexDirection: "row",
    },

    introduction: {
      paddingRight: "0.5rem",
    },

    header: {
      fontSize: "var(--tabView-2)",
    },

    image: {
      width: "40vw",
    },
  },
};

export default IntroCSS;
