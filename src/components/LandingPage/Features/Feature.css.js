const FeatureCSS = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-3)",
    fontWeight: "normal",
  },

  one: {
    padding: "1rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--background-green)",
  },

  image: {
    height: "200px",
    width: "100%",
  },

  text: {
    paddingTop: "0.5rem",
    textAlign: "justify",
  },

  two: {
    padding: "1rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-black)",
    backgroundColor: "var(--background-white)",
  },

  three: {
    padding: "1rem 2rem",
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
      padding: "1rem 4rem",
      flexDirection: "row",
    },

    image: {
      width: "40vw",
    },

    text: {
      width: "45vw",
      padding: "1rem",
    },

    two: {
      padding: "1rem 4rem",
      flexDirection: "row-reverse",
    },

    three: {
      padding: "1rem 4rem",
      flexDirection: "row",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    one: {
      width: "100%",
      padding: "2rem 6rem",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    image: {
      height: "300px",
      width: "40vw",
    },

    text: {
      width: "45vw",
      padding: "1rem",
    },

    two: {
      width: "100%",
      padding: "2rem 6rem",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },

    three: {
      width: "100%",
      padding: "2rem 6rem",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
};

export default FeatureCSS;
