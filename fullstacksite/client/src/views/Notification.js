import React, {Component} from 'react';
import './Notification.css'

class Notification extends Component {
    render() {
        return (
            <div className={`notification ${this.props.level}${this.props.visible ? "visible" : ""}`}>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default Notification;