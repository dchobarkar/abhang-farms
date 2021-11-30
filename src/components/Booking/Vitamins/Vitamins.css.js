const VitaminsCSS = {
  root: {
    padding: "3rem 2rem",
    color: "var(--text-black)",
    backgroundColor: "var(--background-white)",
  },

  header: {
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-2)",
    fontWeight: "bold",
    textAlign: "center",
  },

  container: {
    paddingTop: "1.5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },

  box: {
    width: "50%",
    paddingBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    height: "90px",
    width: "90px",
    padding: "1rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--text-gray)",
  },

  label: {
    paddingTop: "0.5rem",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-3)",
    fontWeight: "normal",
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
      paddingTop: "2rem",
    },

    box: {
      width: "30%",
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
      paddingTop: "2rem",
    },

    box: {
      width: "30%",
    },
  },
};

export default VitaminsCSS;
