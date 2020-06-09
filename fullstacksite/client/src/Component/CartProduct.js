import React, {Component} from 'react';
import cart from "../views/ShoppingCart.module.css";
import detailPage from "../views/DetailPage.module.css";
import Button from "@material-ui/core/Button";

class CartProduct extends Component {
    state = {
        count: this.props.product.count
    }

    decrement = () => {
        this.setState({
            count: this.state.count<=0? 0 : this.state.count-1
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    updateCart = () => {
        if (this.state.count===0) {
            this.props.zeroCount();
            this.setState({count: this.props.product.count}); // Set the state.count to reflex the next product
        } else {
            let arr = JSON.parse(localStorage.getItem('myCart'));
            arr[this.props.index].count = this.state.count;
            arr[this.props.index].cost = this.state.count * arr[this.props.index].price;
            localStorage.setItem('myCart', JSON.stringify(arr));
            this.props.updateCart();
        }
    }

    render() {
        const {picture, name, size, price, count} = this.props.product;
        return (
            <div className={cart.product}>
                <div className={cart.left}>
                    <div className={cart.picContainer}>
                        <img className={cart.pic} src={`assets/${picture}`}
                            alt={name} />
                    </div>
                </div>
                <div className={cart.text}>
                    <div className={cart.labels}>
                        <div>Name:&nbsp;</div>
                        <div>
                            {name}
                        </div>
                    </div>
                    <div>
                        Size: {size}
                    </div>
                    <div>
                        Price: {`£ ${price}`}
                    </div>
                    <div className={detailPage.amountbox}>
                        <button className={detailPage.incrementButton} id="decrement" onClick={this.decrement}>-</button>
                        <input className={detailPage.amount} type="number" value={this.state.count} readOnly={true}/>
                        <button className={detailPage.incrementButton} id="increment" onClick={this.increment}>+</button>
                    </div>
                    <div className={cart.link}>
                        <Button className={cart.update} variant="outlined"
                                style={{padding: '0', fontSize: '14px', backgroundColor: 'transparent',
                                    color: 'tomato', textTransform: 'inherit', borderColor: 'tomato'}}
                                onClick={this.updateCart}>
                            Update cart
                        </Button>
                        <button className={cart.remove} onClick={() => this.props.onRemove(this.props.index)}>
                            Remove item
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;