import React, {Component} from "react";
import {OutlinedButton} from "../views/ButtonStyle";
import cart from "../views/ShoppingCart.module.css";

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFilled: false,
            formCompulsory: {
                firstName: '',
                lastName: '',
                email: '',
                address1: '',
                city: '',
                country: '',
                postcode: '',
                cardNumber: '',
                nameOnCard: '',
                CVV: ''
            },
            formOptional: {
                phone: '',
                address2: '',
                address3: ''
            }
        }
        this.compulsoryChange = this.compulsoryChange.bind(this);
        this.optionalChange = this.optionalChange.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
    }

    compulsoryChange = (e) => {
        let {firstName, lastName, email, address1, city, country, postcode,
            cardNumber, nameOnCard, CVV} = e.target;
        this.setState({
            [firstName]: e.target.value,
            [lastName]: e.target.value,
            [email]: e.target.value,
            [address1]: e.target.value,
            [city]: e.target.value,
            [country]: e.target.value,
            [postcode]: e.target.value,
            [cardNumber]: e.target.value,
            [nameOnCard]: e.target.value,
            [CVV]: e.target.value
        })
    };

    optionalChange = (e) => {
        let { phone, address2, address3 } = e.target;
        this.setState({
            [phone]: e.target.value,
            [address2]: e.target.value,
            [address3]: e.target.value,
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        //-----------------------------------------
        // GRACE LOOK HERE !!!!!!!!!!!!!!!!!!!!!!!!
        /*if (this.state.userEmail) {
            fetch(('/api/subs'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.userEmail
                })
            }).then((res) => {
                console.log(res)
            }).catch(err => console.log(err));
        }*/
        alert(`Success: ${this.state.userEmail} added`);
    };

    render() {
        return (
            <div className={cart.formList}>
                <div className={cart.row}>
                    <div className={cart.doubleLeft}>
                        <div className={cart.fieldPair} >
                            <div className={cart.fieldName}>
                                First Name
                            </div>
                            <input className={cart.fieldForm} type='text' name='firstName' onChange={this.compulsoryChange}/>
                        </div>
                    </div>
                    <div className={cart.doubleRight}>
                        <div className={cart.fieldPair} >
                            <div className={cart.fieldName}>
                                Last Name
                            </div>
                        <input className={cart.fieldForm} type='text' name='LastName' onChange={this.compulsoryChange}/>
                        </div>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.doubleLeft}>
                        <div className={cart.fieldPair} >
                            <div className={cart.fieldName}>
                                Email
                            </div>
                            <input className={cart.fieldForm} type='email' name='email' onChange={this.compulsoryChange}/>
                        </div>
                    </div>
                    <div className={cart.doubleRight}>
                        <div className={cart.fieldPair} >
                            <div className={cart.fieldName}>
                                Phone number
                            </div>
                            <input className={cart.fieldForm} type='text' name='phone' placeholder='Optional' onChange={this.compulsoryChange}/>
                        </div>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.fieldPair} >
                        <div className={cart.fieldName}>
                            Address line 1
                        </div>
                        <input className={cart.fieldForm} type='text' name='address1' onChange={this.compulsoryChange}/>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.fieldPair} >
                        <div className={cart.fieldName}>
                            Address line 2
                        </div>
                        <input className={cart.fieldForm} type='text' name='address2' placeholder='Optional' onChange={this.compulsoryChange}/>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.fieldPair} >
                        <div className={cart.fieldName}>
                            Address line 3
                        </div>
                        <input className={cart.fieldForm} type='text' name='address3' placeholder='Optional' onChange={this.compulsoryChange}/>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.doubleLeft}>
                        <div className={cart.fieldPair} >
                            <div className={cart.fieldName}>
                                City
                            </div>
                            <input className={cart.fieldForm} type='text' name='city' onChange={this.compulsoryChange}/>
                        </div>
                    </div>
                    <div className={cart.doubleRight}>
                        <div className={cart.fieldPair} >
                            <div className={cart.fieldName}>
                                Postcode
                            </div>
                            <input className={cart.fieldForm} type='text' name='postcode' onChange={this.compulsoryChange}/>
                        </div>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.fieldPair} >
                        <div className={cart.fieldName}>
                            Country
                        </div>
                        <input className={cart.fieldForm} type='text' name='country' onChange={this.compulsoryChange}/>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.fieldPair} >
                        <div className={cart.fieldName}>
                            Bank card number
                        </div>
                        <input className={cart.fieldForm} type='number' name='cardNumber' onChange={this.compulsoryChange}/>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.doubleLeft}>
                        <div className={cart.fieldPair} >
                            <div className={cart.fieldName}>
                                Name on card
                            </div>
                            <input className={cart.fieldForm} type='text' name='nameOnCard' onChange={this.compulsoryChange}/>
                        </div>
                    </div>
                    <div className={cart.doubleRight}>
                        <div className={cart.fieldPair} >
                            <div className={cart.fieldName}>
                                CVV
                            </div>
                            <input className={cart.fieldForm} type='number' name='CVV' onChange={this.compulsoryChange}/>
                        </div>
                    </div>
                </div>
                <div className={cart.row}>
                    <OutlinedButton
                        type='submit'
                        style={{fontSize: '2vh', padding: '0 2vh', height: 40}}>
                        Checkout
                    </OutlinedButton>
                </div>
            </div>
        )
    }
}

export default CheckoutForm;