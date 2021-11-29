const GalleryCSS = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--background-green)",
  },

  one: {
    width: "100%",
    paddingBottom: "0.25rem",
  },

  two: {
    width: "100%",
    padding: "0 0.5rem",
  },

  three: {
    width: "100%",
    padding: "0.25rem 0.5rem",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    two: {
      width: "45%",
    },

    three: {
      width: "45%",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    two: {
      width: "45%",
    },

    three: {
      width: "45%",
    },
  },
};

export default GalleryCSS;
