import React, {Component} from 'react';
import Product from "../Component/Product";
import OverHeadBar from "./OverHeadBar";
import merch from "./MerchPage.module.css";
import IconBar from "./IconBar";

class MerchPage extends Component {
    state = {
        loading: true,
        productList: null
    };

    async componentDidMount() {
        const response = await fetch('/api/products');
        const products = await response.json();
        this.setState({loading: false, productList: products})
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <OverHeadBar currentPage='merch'/>
                    <div className={merch.overview}>
                        loading...
                    </div>
                    <IconBar />
                </div>
            )}
        if (!this.state.productList) {
            return <div><OverHeadBar currentPage='merch'/>no product to display</div>
        }

        return (
            <div>
                <OverHeadBar currentPage='merch'/>
                <div className={merch.overview}>
                    {this.state.productList.map((product) => {
                        return <Product product={product} key={product.id}/>})}
                </div>
                <IconBar />
            </div>
        );
    }
}

export default MerchPage;