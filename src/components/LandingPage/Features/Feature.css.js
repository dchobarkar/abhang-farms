const FeatureCSS = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
  },

  one: {
    padding: "3rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--background-green)",
  },

  image: {
    width: "100%",
  },

  text: {
    paddingTop: "1rem",
    lineHeight: "1.5rem",
    textAlign: "center",
  },

  two: {
    padding: "3rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-black)",
    backgroundColor: "var(--background-white)",
  },

  three: {
    padding: "3rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--background-green)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    one: {
      width: "100%",
      padding: "5rem 4rem",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    image: {
      width: "40vw",
    },

    text: {
      width: "30vw",
      textAlign: "justify",
    },

    two: {
      width: "100%",
      padding: "5rem 4rem",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },

    three: {
      width: "100%",
      padding: "5rem 4rem",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    one: {
      width: "100%",
      padding: "6rem 6rem",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    image: {
      width: "40vw",
    },

    text: {
      width: "30vw",
      textAlign: "justify",
    },

    two: {
      width: "100%",
      padding: "6rem 6rem",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },

    three: {
      width: "100%",
      padding: "6rem 6rem",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
};

export default FeatureCSS;
