const SpinnerCSS = {
  root: {
    height: "95vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--background-green)",
  },

  ldsRing: {
    width: "80px",
    height: "80px",
    display: "inline-block",
    position: "relative",

    "& div": {
      height: "64px",
      width: "64px",
      margin: "8px",
      display: "block",
      position: "absolute",
      border: "8px solid #fff",
      borderRadius: "50%",
      boxSizing: "border-box",
      animation: "$ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
      borderColor: "#fff transparent transparent transparent",
    },

    "& div:nth-child(1)": {
      animationDelay: "-0.45s",
    },

    "& div:nth-child(2)": {
      animationDelay: "-0.3s",
    },

    "& div:nth-child(3)": {
      animationDelay: "-0.15s",
    },
  },

  "@keyframes ring": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
};

export default SpinnerCSS;
