import React, {Component} from "react";
import {OutlinedButton} from "../views/ButtonStyle";
import cart from "../views/ShoppingCart.module.css";

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    compulsoryChange = (e) => {
        const value = e.target.value; // target leads to the line that's being executed
        const name = e.target.name; // Because we have a prop 'name' when calling this function
        this.setState(prevState => ({
            ...prevState,
            formCompulsory: {
                ...prevState.formCompulsory,
                [name]: value,
            }
        }))
        //console.log(this.state);
    };

    optionalChange = (e) => {
        const value = e.target.value; // target leads to the line that's being executed
        const name = e.target.name; // Because we have a prop 'name' when calling this function
        this.setState(prevState => ({
            ...prevState,
            formOptional: {
                ...prevState.formOptional,
                [name]: value,
            }
        }))
        // console.log(this.state);
    };

    checkout = (e) => {
        e.preventDefault();
        //console.log("Clicked checkout button")
        // check if the compulsory fields are filled
        var obj = this.state.formCompulsory;
        for (var key in obj) {
            //console.log(key, obj[key]);
            if (obj[key]==='') {
                alert("ERROR: Please fill in all required fields.")
                return
            }
        }
        this.props.onCheckout(this.state);
    }

    /*componentDidUpdate() {
        console.log(this.state);
    }*/


    render() {
        return (
            <div className={cart.formList}>
                <div className={cart.row}>
                    <div className={cart.fieldForm}>
                        <div className={cart.doubleLeft}>
                            <button className={cart.remove} onClick={()=>this.props.onClear()}>
                                Empty cart
                            </button>
                        </div>
                    </div>
                    <div className={cart.fieldForm} style={{fontWeight: 'bold', fontSize: '20px', fontFamily: "'Arial Narrow', serif"}}>
                        Total: £ {this.props.money}
                    </div>
                </div>
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
                        <input className={cart.fieldForm} type='text' name='lastName' onChange={this.compulsoryChange}/>
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
                            <input className={cart.fieldForm} type='number' name='phone' placeholder='Optional' onChange={this.optionalChange}/>
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
                        <input className={cart.fieldForm} type='text' name='address2' placeholder='Optional' onChange={this.optionalChange}/>
                    </div>
                </div>
                <div className={cart.row}>
                    <div className={cart.fieldPair} >
                        <div className={cart.fieldName}>
                            Address line 3
                        </div>
                        <input className={cart.fieldForm} type='text' name='address3' placeholder='Optional' onChange={this.optionalChange}/>
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
                        style={{fontSize: '2vh', padding: '0 2vh', height: 40, width: '100%'}} onClick={this.checkout}>
                        Checkout
                    </OutlinedButton>
                </div>
            </div>
        )
    }
}

export default CheckoutForm;