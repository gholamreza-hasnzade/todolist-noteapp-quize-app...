import React, { Component } from "react";

// * style
import "./notification.css";

class Notification extends Component {
    constructor() {
        super();

        this.state = {
            notifications: [
                "اطلاعیه شماره 1",
                "اطلاعیه شماره 1",
                "اطلاعیه شماره 1",
                "اطلاعیه شماره 1",
            ],
        };
    }
    render() {
        return (
            <nav
                className="navbar navbar-expand-lg navbar-default fixed-top navbar-dark"
                id="mainNav"
            >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Hello World
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav">
                            {this.state.notifications.length > 0 && (
                                <li className="nav-item">
                                    <span className="badge badge-pill badge-warning">
                                        {this.state.notifications.length}
                                    </span>
                                    <a className="nav-link" href="/News/">
                                        News{" "}
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Notification;
