const FooterCSS = {
  root: {
    height: "80px",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--background-black)",

    "& p": {
      margin: "0",
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
