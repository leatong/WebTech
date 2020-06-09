import React, {Component} from 'react';
import OverHeadBar from "./OverHeadBar";
import IconBar from "./IconBar";
import CartProduct from "../Component/CartProduct";
import cart from "../views/ShoppingCart.module.css";
import CheckoutForm from "../Component/CheckoutForm";
import headBar from "./OverHeadBar.module.css";

class ShoppingCartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            totalCost: 0,
            productList: null
        }
        this.checkoutCart = this.checkoutCart.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    async componentDidMount() {
        let cart = await localStorage.getItem('myCart');
        var arr = JSON.parse(cart);
        if (arr) {
            this.setState({productList: arr});
        }
        var money = this.totalCost();
        this.setState({totalCost: money});
        // console.log(this.state);
        this.setState({loading: false});
    }

    removeItem = (index) => {
        let arr = JSON.parse(localStorage.getItem('myCart'));
        arr.splice(index,1);
        localStorage.setItem('myCart', JSON.stringify(arr));
        this.setState({productList: arr});
        var money = this.totalCost();
        this.setState({totalCost: money});
    }

    emptyCart = () => {
        localStorage.clear();
        this.setState({productList: null, totalCost: 0});
    }

    checkoutCart = (childState) => {
        fetch(('/api/orders/createNewOrder'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: childState.formCompulsory.firstName,
                lastName: childState.formCompulsory.lastName,
                email: childState.formCompulsory.email,
                address1: childState.formCompulsory.address1,
                city: childState.formCompulsory.city,
                country: childState.formCompulsory.country,
                postcode: childState.formCompulsory.postcode,
                address2: childState.formOptional.address2,
                address3: childState.formOptional.address3,
                phone: childState.formOptional.phone,
                products: this.state.productList
            })
        }).then((res) => {
            console.log(res)
        }).catch(err => console.log(err));
        alert("Success");
        this.emptyCart();
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
                    <div className={cart.empty}>
                        <p>Empty cart</p>
                        <p>Go shopping!</p>
                    </div>
                    <IconBar />
                </div>);}
        return (
            <div className={headBar.overview}>
                <OverHeadBar currentPage='cart'/>
                <div className={cart.overview}>
                    <div className={cart.productList}>
                        {this.state.productList.map((product, index) => {
                            return (
                                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                // key has to be unique not just within the same rendering loop
                                // Otherwise when deleting previous child, the child behind will take over it's old state
                                <CartProduct product={product} index={index} key={`${product.id}-${product.size}`}
                                             onRemove={this.removeItem} updateCart={()=>this.componentDidMount()}
                                             zeroCount={()=>this.removeItem(index)}/>
                            )})
                        }
                    </div>
                    <div className={cart.right}>
                        <CheckoutForm onClear={this.emptyCart} onCheckout={this.checkoutCart} money={this.totalCost()}/>
                    </div>
                </div>
                <IconBar />
            </div>
        );
    }
}

export default ShoppingCartPage;