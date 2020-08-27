import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import IsAlreadyTrue from "./IsAlreadyTrue/IsAlreadyTrue";
import animation from "./Appanimation.module.css";
import animationIsAlready from "./IsAlreadyTrue/isAlreadyTrueAnimation.module.css";
import FilterAnimation from "./Filter/FilterAnimation.module.css";
import { connect } from "react-redux";
import appAction from "../redux/app/appAction";

class App extends Component {
  state = {
    isAlready: false,
  };

  componentDidMount() {
    let localStorContacts = JSON.parse(localStorage.getItem("items"));
    localStorContacts && this.props.addItemLocalStor(localStorContacts);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.items !== prevState.items) {
  //     localStorage.setItem("items", JSON.stringify(this.props.items));
  //   }
  // }

  changeIsAlready = (name) => {
    if (this.props.app.items.find((contact) => name === contact.name)) {
      this.setState({ isAlready: true });
      return false;
    } else {
      this.setState({ isAlready: false });
    }
    return true;
  };

  contactsForRenderAndFilter = () => {
    const { items } = this.props.app;

    const { filter } = this.props.app;

    console.log(this.props.app);

    return items.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    let contactsArrayFiltered = this.contactsForRenderAndFilter();

    return (
      <>
        <CSSTransition in={this.state.isAlready === true} timeout={300} classNames={animationIsAlready} unmountOnExit>
          <IsAlreadyTrue onChangeIsAlready={this.changeIsAlready} />
        </CSSTransition>

        <div className={animation.container}>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={animation} unmountOnExit>
            {(stage) => {
              return (
                <>
                  <h1 className={animation.title}>Phonebook</h1>
                  <CSSTransition in={stage === "entered"} timeout={300} classNames={animation} unmountOnExit>
                    <p className={animation.p}> &#9742;</p>
                  </CSSTransition>
                </>
              );
            }}
          </CSSTransition>

          <ContactForm changeIsAlready={this.changeIsAlready} />

          <CSSTransition in={this.props.app.items.length > 1} timeout={300} classNames={FilterAnimation} unmountOnExit>
            <Filter handleChangeFilterREDUX={this.props.onChangeFilter} filter={this.props.app.filter} />
          </CSSTransition>

          <ContactList contacts={contactsArrayFiltered} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemLocalStor: (value) => dispatch(appAction.addItemsFromLocalStor(value)),
    onChangeFilter: (value) => dispatch(appAction.filter(value)),
    onAddItem: (value) => dispatch(appAction.itemsAdd(value)),

    onDelItem: (value) => dispatch(appAction.itemsDel(value)),
  };
};

// const mapDispatchToprops = {
//   onChangeFilter: appAction.filter,
//   onAddItem: appAction.itemsAdd,
//   onDelItem: appAction.itemsDel,
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
