import React, { Component } from "react";
import PropTypes from "prop-types";

import { Consumer } from "../context";

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onArrowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                {showContactInfo ? (
                  <FaAngleUp
                    onClick={this.onArrowClick}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <FaAngleDown
                    onClick={this.onArrowClick}
                    style={{ cursor: "pointer" }}
                  />
                )}
                <FaTimes
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
