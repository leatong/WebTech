import React, {Component} from "react";
import {OutlinedButton} from "../views/ButtonStyle";
import home from "../views/HomePage.module.css";

class EmailForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userEmail: '',
        }
    }

    handleUserEmailChange = (event) => {
        this.setState({
            userEmail: event.target.value
        })
    };

    handleSubmit = (event) => {
        /*event.preventDefault();*/
        alert(`Success: ${this.state.userEmail} added`)

        /*if (this.state.userEmail) {
            /!* ------------------------------------------------ *!/
            /!* This is where to fetch for database *!/
            /!*
            fetch(`...email=${this.state.userEmail}`)
                .then(res => res.json())
                .catch(err => console.log(err));
             *!/

        }*/
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={home.email}>
                    <input className={home.subscribe}
                        type='email'
                        name='userEmail'
                        placeholder='Enter Email Address'
                        value={this.state.userEmail}
                        onChange={this.handleUserEmailChange}/>
                    <OutlinedButton
                        type='submit'
                        style={{fontSize: '2vh', padding: '0 2vh', height: 40}}>
                        Subscribe!
                    </OutlinedButton>
                </div>
            </form>
        )
    }
}

export default EmailForm;