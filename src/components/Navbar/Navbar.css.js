const NavbarCSS = {
  root: {
    width: "100%",
    padding: "1rem",
    position: "absolute",
    zIndex: "1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& a:hover": {
      textDecoration: "none",
    },
  },

  logo: {
    height: "4rem",
    width: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10rem",
    backgroundColor: "var(--background-green)",
  },

  logoText: {
    margin: 0,
    fontFamily: "Chicle,sans-serif",
    fontSize: "0.9rem",
    textAlign: "center",
    color: "var(--text-logo)",
  },

  buyButton: {
    height: "2rem",
    width: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--background-button)",
  },

  buttonText: {
    margin: 0,
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--text-3)",
    color: "var(--text-black)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      padding: "2rem",
      position: "fixed",
    },

    buyButton: {
      height: "3rem",
      width: "5rem",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      padding: "0 3rem",
      paddingTop: "2rem",
      position: "fixed",
    },

    buyButton: {
      height: "3rem",
      width: "5rem",
    },
  },
};

export default NavbarCSS;
