import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {OutlinedButton} from "../views/ButtonStyle";
import home from "../views/HomePage.module.css"

class EmailForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userEmail: ''
        }
    }

    handleUserEmailChange = (event) => {
        this.setState({
            userEmail: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userEmail}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={home.email}>
                    <input type='text' placeholder='Email address' value={this.state.userEmail} onChange={this.handleUserEmailChange}/>
                    <OutlinedButton type='submit' style={{fontSize: '2vh', width: '15vh', height: 40}}>
                        Subscribe!
                    </OutlinedButton>
                </div>
            </form>
        )
    }
}

export default EmailForm;