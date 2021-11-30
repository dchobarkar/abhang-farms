const ModalCSS = {
  root: {
    height: "40%",
    width: "80%",
    position: "absolute",
    zIndex: "1000",
    top: "30%",
    left: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    fontFamily: "Lato,sans-serif",
    fontSize: "var(--text-4)",
    fontWeight: "normal",
    color: "var(--text-white)",
    backgroundColor: "var(--background-green)",
  },

  /* Tablet view */
  "@media only screen and (min-width: 401px) and (max-width: 960px)": {
    root: {
      width: "60%",
      left: "20%",
    },
  },

  /* Desktop view */
  "@media only screen and (min-width: 961px)": {
    root: {
      width: "40%",
      left: "30%",
    },
  },
};

export default ModalCSS;
