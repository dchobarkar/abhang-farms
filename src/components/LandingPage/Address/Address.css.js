const AddressCSS = {
  root: {
    padding: "1rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
    color: "var(--text-black)",
    backgroundColor: "var(--background-white)",
  },

  address: {
    width: "100%",
    paddingTop: "1rem",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "1rem 4rem",
      flexDirection: "row-reverse",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "1rem 6rem",
      flexDirection: "row-reverse",
    },
  },
};

export default AddressCSS;
