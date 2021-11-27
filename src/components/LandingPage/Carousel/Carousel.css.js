const CarouselCSS = {
  root: {
    height: "30vh",
    width: "100%",
    position: "absolute",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: "var(--mobView-1)",
    color: "var(--text-white)",
    textAlign: "center",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      height: "50vh",
    },

    header: {
      fontSize: "var(--tabView-1)",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      height: "100vh",
    },

    header: {
      fontSize: "var(--desView-1)",
    },
  },
};

export default CarouselCSS;
