import React from "react";
import styles from "./Switcher.module.css";
import { connect } from "react-redux";
import { pushSwitcherA, pushSwitcherB } from "../../redux/actions/index";

const Switcher = (props) => {
  function handleClick() {

    switch (props.name) {
      case "Switcher A":
        props.pushSwitcherA();
        break;
      case "Switcher B":
        props.pushSwitcherB();
        break;
    }
  }
  return (
    <div>
      <button className={styles.switcher} onClick={handleClick}>
        {props.name}
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  pushSwitcherA,
  pushSwitcherB,
};

export default connect(null, mapDispatchToProps)(Switcher);
