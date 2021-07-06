import React from "react";
import style from "./Book.module.css";
import Step from "../Steps/Step";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bookNow, addProduct } from "../../actions";
import { useTranslation } from "react-i18next";
import firebase from "../../Config";

const Book = (props) => {
  const { t } = useTranslation();

  const createOrder = () => {
    const orderRef = firebase.database().ref("orders");
    const order = {
      data: props.selectedData,
      serviceType: props.serviceType,
      description: props.describtion,
      date: props.dateTime.date,
      time: props.dateTime.time,
      email: props.userInformation.email,
      name: props.userInformation.firstName,
      number: props.userInformation.number,
      AdressStreet: props.adress.street ? props.adress.street : "",
      AdressDistrict: props.adress.district ? props.adress.district : "",
      orderConfirmed: "FALSE",
      orderfinished: "FALSE",
      workerSend: "FALSE",
      lat: props.currentLocation.lat ? props.currentLocation.lat : "",
      lang: props.currentLocation.lang ? props.currentLocation.lang : "",
    };
    orderRef.push(order);
    window.location.reload();
  };

  return (
    <div className={style.main}>
      {props.serviceType.length === 0 && <Redirect push to="/services" />}
      <div className={style.container}>
        <h1>{t("book.h1")}</h1>
        <h3>{t("book.h3")}</h3>
        <Step count={6} />
        <div className={style.form}>
          <h1>{t("book.formh1")}</h1>
          <Link to="/" onClick={createOrder}>
            {t("book.formlink")}
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedData: state.selectedData,
    serviceType: state.serviceType,
    describtion: state.describtion,
    dateTime: state.dateTime,
    userInformation: state.userInformation,
    currentLocation: state.currentLocation,
    adress: state.adress,
  };
};

export default connect(mapStateToProps, { bookNow, addProduct })(Book);
