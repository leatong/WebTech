import React, {Component} from 'react';
import Product from "../Component/Product";
import OverHeadBar from "./OverHeadBar";
import merch from "./MerchPage.module.css";
import DetailPage from "./DetailPage";

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
        if (this.state.loading) return <div>loading...</div>
        if (!this.state.productList) return <div>no product to display</div>
        if (this.props.match.params) {
            console.log(this.props);
            return <DetailPage />
        }
        return (
            <div>
                <OverHeadBar currentPage='SHOP'/>
                <div className={merch.overview}>
                    {this.state.productList.map((product) => {
                        return <Product product={product} key={product.id}/>})}
                </div>
            </div>
        );
    }
}

export default MerchPage;