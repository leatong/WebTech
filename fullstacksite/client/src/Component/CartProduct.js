import React, {Component} from 'react';
import cart from "../views/ShoppingCart.module.css";

class CartProduct extends Component {
    render() {
        return (
            <div className={cart.product}>
                <div className={cart.pic}>
                    <img className={cart.pic} src={`assets/${this.props.product.picture}`} />
                </div>
                <div className={cart.text}>

                </div>
            </div>
        );
    }
}

export default CartProduct;