const NavbarCSS = {
  root: {
    width: "100%",
    padding: "1rem",
    position: "absolute",
    zIndex: "100",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& a": {
      textDecoration: "none",
    },
  },

  logo: {
    height: "4rem",
    width: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "var(--background-green)",
  },

  logoText: {
    fontFamily: "Chicle,sans-serif",
    fontSize: "0.9rem",
    textAlign: "center",
    color: "var(--text-logo)",
  },

  button: {
    height: "2.5rem",
    width: "4.4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--background-button)",
  },

  buttonText: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--text-3)",
    color: "var(--text-black)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "2rem 4rem",
      position: "fixed",
    },

    button: {
      height: "3rem",
      width: "5rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "2rem 6rem",
      position: "fixed",
    },

    buyButton: {
      height: "3rem",
      width: "5rem",
    },
  },
};

export default NavbarCSS;
