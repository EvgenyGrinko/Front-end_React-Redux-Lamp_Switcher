import React from "react";
import styles from "./Lamp.module.css";
import { connect } from "react-redux";

const Lamp = (props) => {

  return (
    <div
      className={`${styles.lamp} ${
        props.isLampOn ? styles.lampOn : ""
      }`}
    ></div>
  );
};

function mapStateToProps(state) {
  return { isLampOn: state.isLampOn};
}


export default connect(mapStateToProps)(Lamp);
