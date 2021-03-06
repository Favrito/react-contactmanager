import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { Consumer } from "../../context";

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onArrowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {}

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
                {name}
                {showContactInfo ? (
                  <FaAngleUp
                    onClick={this.onArrowClick}
                    style={{ cursor: "pointer", marginLeft: "6px" }}
                  />
                ) : (
                  <FaAngleDown
                    onClick={this.onArrowClick}
                    style={{ cursor: "pointer", marginLeft: "6px" }}
                  />
                )}
                <FaTimes
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
                <Link to={`/contact/edit/${id}`}>
                  <FaPencilAlt
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
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
