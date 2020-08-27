import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import style from "./ContactListStyl.module.css";

import animitem from "./ContactListAnimation.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import appAction from "../../redux/app/appAction";

let ContactList = ({ contacts, onDelItem }) => (
  <section>
    <TransitionGroup component="ul" className={style.list}>
      {contacts.map((el) => (
        <CSSTransition key={el.id} timeout={200} classNames={animitem}>
          <ContactListItem el={el} delCont={() => onDelItem(el.id)} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </section>
);

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelItem: (value) => dispatch(appAction.itemsDel(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelItem: PropTypes.func.isRequired,
};
