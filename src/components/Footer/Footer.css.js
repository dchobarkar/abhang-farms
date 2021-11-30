const FooterCSS = {
  root: {
    minHeight: "4rem",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "var(--text-white)",
    backgroundColor: "var(--background-black)",

    "& p": {
      fontFamily: "Lato,sans-serif",
      fontSize: "var(--text-4)",
      fontWeight: "normal",
    },
  },

  image: {
    width: "1.2rem",
    height: "1.2rem",
    position: "relative",
    top: "4px",
  },

  link: {
    "&:link,&:visited": {
      textDecoration: "none",
      color: "var(--text-gray)",
    },
  },
};

export default FooterCSS;
