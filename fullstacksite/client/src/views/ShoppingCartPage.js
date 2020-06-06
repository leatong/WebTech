import React, {Component} from 'react';
import OverHeadBar from "./OverHeadBar";
import IconBar from "./IconBar";
import Link from "@material-ui/core/Link";
import CartProduct from "../Component/CartProduct";
import cart from "../views/ShoppingCart.module.css";

class ShoppingCartPage extends Component {
    state = {
        loading: true,
        productList: null
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

    render() {
        if (this.state.loading) return <div><OverHeadBar currentPage='cart'/>loading...</div>
        if (!this.state.productList) {
            return (
                <div>
                    <OverHeadBar currentPage='cart'/>
                    <div>Empty cart</div>
                    <div>Go shopping</div>
                    IconBar />
                </div>);}
        return (
            <div>
                <OverHeadBar currentPage='cart'/>
                <div className={cart.overview}>
                    <div className={cart.productList}>
                        {this.state.productList.map((product, index) => {
                            return (
                                <div key={index}>
                                    <CartProduct product={product} />
                                </div>
                            )})
                        }
                    </div>
                    <div className={cart.forms}>

                    </div>
                </div>

                <IconBar />
            </div>
        );
    }
}

export default ShoppingCartPage;