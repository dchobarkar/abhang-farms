import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Spinner from "./customComponents/Spinner/Spinner";

const LandingPage = React.lazy(() => {
  return import("./components/LandingPage/LandingPage");
});
const Gallery = React.lazy(() => {
  return import("./components/Gallery/Gallery");
});
const Booking = React.lazy(() => {
  return import("./components/Booking/Booking");
});
const NotFound = React.lazy(() => {
  return import("./components/NotFound/NotFound");
});

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Suspense fallback={Spinner}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <LandingPage {...props} />}
          />

          <Route
            path="/gallery"
            exact
            render={(props) => <Gallery {...props} />}
          />

          <Route
            path="/booking"
            exact
            render={(props) => <Booking {...props} />}
          />

          <Route render={(props) => <NotFound {...props} />} />
        </Switch>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
