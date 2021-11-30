import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Formik, Form, Field } from "formik";

import Modal from "../../../customComponents/Modal/Modal";
import Image from "../../../assets/img/order.png";
import OrderCSS from "./Order.css";

// CSS
const useStyles = makeStyles({ ...OrderCSS });

// Driver component
function Order(props) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const price = {
    small: 40,
    medium: 80,
    oneKg: 30,
    twoKg: 60,
  };
  const [order, setOrder] = useState({
    small: 0,
    medium: 0,
    oneKg: 0,
    twoKg: 0,
  });
  const [total, setTotal] = useState(0);

  // Function to calculate the total sum for given order
  const calTotal = (packet) => {
    let n;
    switch (packet) {
      case "small":
        n = order.small + 1;
        setOrder({ ...order, small: n });
        setTotal(total + price.small);
        break;

      case "medium":
        n = order.medium + 1;
        setOrder({ ...order, medium: n });
        setTotal(total + price.medium);
        break;

      case "oneKg":
        n = order.oneKg + 1;
        setOrder({ ...order, oneKg: n });
        setTotal(total + price.oneKg);
        break;

      case "twoKg":
        n = order.twoKg + 1;
        setOrder({ ...order, twoKg: n });
        setTotal(total + price.twoKg);
        break;

      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h2 className={classes.header}>Order here</h2>
        <p className={classes.text}>
          Get fresh picked Capsicum from field directly at your doorsteps.
        </p>

        <div className={classes.container}>
          <div className={classes.box}>
            <h3 className={classes.boxHeader}>Small Package</h3>

            <img className={classes.image} src={Image} alt="Small Package" />

            <p className={classes.text}>Rs. {price.small}</p>

            <p className={classes.text}>Small Package : {order.small}</p>

            <button
              className={classes.button}
              onClick={() => calTotal("small")}
            >
              Add
            </button>
          </div>

          <div className={classes.box}>
            <h3 className={classes.boxHeader}>Medium Package</h3>

            <img className={classes.image} src={Image} alt="Medium Package" />

            <p className={classes.text}>Rs. {price.medium}</p>

            <p className={classes.text}>Medium Package : {order.medium}</p>

            <button
              className={classes.button}
              onClick={() => calTotal("medium")}
            >
              Add
            </button>
          </div>

          <div className={classes.box}>
            <h3 className={classes.boxHeader}>1 Kg Package</h3>

            <img className={classes.image} src={Image} alt="1 Kg Package" />

            <p className={classes.text}>Rs. {price.oneKg}</p>

            <p className={classes.text}>1 Kg Package : {order.oneKg}</p>

            <button
              className={classes.button}
              onClick={() => calTotal("oneKg")}
            >
              Add
            </button>
          </div>

          <div className={classes.box}>
            <h3 className={classes.boxHeader}>2 Kg Package</h3>

            <img className={classes.image} src={Image} alt="2 Kg Package" />

            <p className={classes.text}>Rs. {price.twoKg}</p>

            <p className={classes.text}>2 Kg Package : {order.twoKg}</p>

            <button
              className={classes.button}
              onClick={() => calTotal("twoKg")}
            >
              Add
            </button>
          </div>
        </div>

        <p className={classes.totalText}>Total Sum : {total}</p>

        <button className={classes.orderButton} onClick={() => setIsOpen(true)}>
          Order
        </button>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className={classes.modal}>
          <p className={classes.modalText}>
            We need some details before delivering the order.
          </p>

          <Formik
            initialValues={{
              name: "",
              mobile: "",
              address: "",
            }}
            onSubmit={async (values) => {
              const Query = {
                Name: values.name,
                Mobile_No: values.mobile,
                Address: values.address,
                Small_Packet: order.small,
                Medium_Packet: order.medium,
                One_Kg: order.oneKg,
                Two_Kg: order.twoKg,
                Total: total,
              };
              await fetch("https://formspree.io/mdowovwq", {
                method: "POST",
                body: JSON.stringify(Query),
              })
                .then(setIsOpen(false))
                .then(setIsSuccess(true))
                .catch((error) => {
                  console.log(error.response);
                });
            }}
          >
            <Form className={classes.form}>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="Name" />

              <label htmlFor="mobile">Mobile No.</label>
              <Field id="mobile" name="mobile" placeholder="Mobile No." />

              <label htmlFor="address">Address</label>
              <Field id="address" name="address" as="textarea" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </Modal>

      <Modal isOpen={isSuccess} setIsOpen={setIsSuccess}>
        <p className={classes.modalText}>Your order has been recorded.</p>

        <p className={classes.modalText}>We will contact you soon.</p>
      </Modal>
    </React.Fragment>
  );
}

export default Order;
