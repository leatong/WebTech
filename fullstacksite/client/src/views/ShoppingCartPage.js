import React, {Component} from 'react';
import OverHeadBar from "./OverHeadBar";
import IconBar from "./IconBar";
import Link from "@material-ui/core/Link";
import CartProduct from "../Component/CartProduct";
import cart from "../views/ShoppingCart.module.css";
import CheckoutForm from "../Component/CheckoutForm";
import headBar from "./OverHeadBar.module.css";

class ShoppingCartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            productList: null
        }
        this.checkoutCart = this.checkoutCart.bind(this);
    }

    async componentDidMount() {
        let cart = await localStorage.getItem('myCart');
        var arr = JSON.parse(cart);
        if (arr) {
            this.setState({productList: arr});
        }
        console.log(this.state.productList);
        this.setState({loading: false});
    }

    removeItem = (index) => {
        let arr = JSON.parse(localStorage.getItem('myCart'));
        arr.splice(index,1);
        localStorage.setItem('myCart', JSON.stringify(arr));
        this.setState({productList: arr});
    }

    emptyCart = () => {
        localStorage.clear();
        this.setState({productList: null});
    }

    checkoutCart = (childState) => {
        //console.log(childState);
        //         //-----------------------------------------
        //         // GRACE LOOK HERE !!!!!!!!!!!!!!!!!!!!!!!!
        //         /*if (this.state.userEmail) {
        //             fetch(('/api/subs'), {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 },
        //                 body: JSON.stringify({
        //                     email: this.state.userEmail
        //                 })
        //             }).then((res) => {
        //                 console.log(res)
        //             }).catch(err => console.log(err));
        //         }*/
        //         alert(`Success: ${this.state.userEmail} added`);
        //     };
        alert("Success");
        //console.log("passed to shoppingCartPage");
        //console.log(this.state);
    }

    totalCost() {
        var list = this.state.productList;
        var sum = 0;
        for (var key in list) {
            sum += list[key].cost;
        }
        return sum.toFixed(2);
    }

    render() {
        if (this.state.loading) return <div><OverHeadBar currentPage='cart'/>loading...</div>
        if (!this.state.productList || this.state.productList.length===0) {
            return (
                <div>
                    <OverHeadBar currentPage='cart'/>
                    <div>Empty cart</div>
                    <div>Go shopping</div>
                    <IconBar />
                </div>);}
        return (
            <div className={headBar.overview}>
                <OverHeadBar currentPage='cart'/>
                <div className={cart.overview}>
                    <div className={cart.productList}>
                        {this.state.productList.map((product, index) => {
                            return (
                                <CartProduct product={product} index={index} key={index} onRemove={this.removeItem}/>
                            )})
                        }
                    </div>
                    <div className={cart.right}>
                        <CheckoutForm onClear={this.emptyCart} onCheckout={this.checkoutCart} moeny={this.totalCost()}/>
                    </div>
                </div>

                <IconBar />
            </div>
        );
    }
}

export default ShoppingCartPage;