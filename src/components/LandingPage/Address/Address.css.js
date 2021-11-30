const AddressCSS = {
  root: {
    padding: "3rem 2rem",
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
    paddingTop: "2rem",

    "& p": {
      "& span": {
        fontWeight: "bold",
      },
    },

    "& p:nth-child(2)": {
      paddingTop: "1rem",
      fontStyle: "italic",
    },
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "5rem 4rem",
      flexDirection: "row-reverse",
    },

    address: {
      paddingTop: "0",
      paddingRight: "1rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "6rem 6rem",
      flexDirection: "row-reverse",
    },

    address: {
      paddingTop: "0",
      paddingRight: "1rem",
    },
  },
};

export default AddressCSS;
