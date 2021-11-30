import React from "react";

import Benefits from "./Benefits/Benefits";
import Nutritions from "./Nutritions/Nutritions";
import Vitamins from "./Vitamins/Vitamins";
import Order from "./Order/Order";

// Driver component
function Booking(props) {
  return (
    <React.Fragment>
      <Benefits />

      <Nutritions />

      <Vitamins />

      <Order />
    </React.Fragment>
  );
}

export default Booking;
