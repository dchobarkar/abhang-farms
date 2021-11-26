const FooterCSS = {
  root: {
    minHeight: "5rem",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--background-black)",

    "& p": {
      margin: "0",
      fontFamily: "Lato,sans-serif",
      fontSize: "var(--text-4)",
      fontWeight: "normal",
    },
  },

  heartImg: {
    width: "1.2rem",
    height: "1.2rem",
  },

  developerLink: {
    "&:link,&:visited": {
      textDecoration: "none",
      color: "var(--text-gray)",
    },
  },
};

export default FooterCSS;
