import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  arrowClickHandler = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          {showContactInfo ? (
            <FaAngleUp onClick={this.arrowClickHandler} />
          ) : (
            <FaAngleDown onClick={this.arrowClickHandler} />
          )}
        </h4>

        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
