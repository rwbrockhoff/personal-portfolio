import React, { Component } from "react";
import "./ContactBubble.scss";
import { Link } from "react-router-dom";

export default class ContactBubble extends Component {
    render() {
        return (
            <div className="bubble-container">
                <Link to="/contact">
                    <div className="bubble">
                        <i className="far fa-envelope" />
                    </div>
                </Link>
            </div>
        );
    }
}