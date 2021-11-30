const NotFoundCSS = {
  root: {
    height: "95vh",
    padding: "6rem 2rem 3rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato,sans-serif",
    fontWeight: "normal",
    backgroundColor: "var(--background-white)",

    "& a": {
      textDecoration: "none",
    },
  },

  header: {
    fontFamily: "Dosis,sans-serif",
    fontSize: "var(--mobView-1)",
    fontWeight: "bold",
  },

  image: {
    height: "400px",
    width: "100%",
    backgroundImage:
      "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
    backgroundPosition: "center",
    backgroundRepeat: "repeat-y",
  },

  subHeader: {
    fontSize: "var(--mobView-2)",
    fontWeight: "normal",
  },

  text: {
    padding: "1rem 0",
    fontSize: "var(--text-1)",
  },

  button: {
    height: "50px",
    width: "150px",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
    color: "var(--text-black)",
    backgroundColor: "var(--background-button)",
  },
};

export default NotFoundCSS;
