import React, {Component} from 'react';
import cart from "../views/ShoppingCart.module.css";
import detailPage from "../views/DetailPage.module.css";

class CartProduct extends Component {

    render() {
        const {picture, name, size, price, count} = this.props.product;
        return (
            <div className={cart.product}>
                <div className={cart.left}>
                    <img className={cart.pic} src={`assets/${picture}`} />
                </div>
                <div className={cart.text}>
                    <div>
                        Name: {name}
                    </div>
                    <div>
                        Size: {size}
                    </div>
                    <div>
                        Price: {`£ ${price}`}
                    </div>
                    <div className={detailPage.amountbox}>
                        <button className={detailPage.incrementButton} id="decrement" onClick={this.decrement}>-</button>
                        <input className={detailPage.count} type="number" value={count} readOnly={true}/>
                        <button className={detailPage.incrementButton} id="increment" onClick={this.increment}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;