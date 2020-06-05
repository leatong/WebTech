import React, {Component} from 'react';
import merch from "../views/MerchPage.module.css";
import Tag from "./Tag";

class Product extends Component{
    render() {
        return (
            <div>
                <div className={merch.tile}>
                    <img className={merch.pic}
                         src={`assets/${this.props.product.picture}`}
                         alt={this.props.product.description}/>
                    <Tag name={this.props.product.name}
                         description={this.props.product.description}
                         price={`£ ${this.props.product.price}`}
                         id={this.props.product.id} />
                </div>
            </div>
        );
    }
}

export default Product;

/*
<OverHeadBar currentPage='SHOP'/>
            <div className={merch.overview}>
                <div className={merch.tile}>
                    <img className={merch.pic} src={Album1} alt='Album1 Cover'/>
                    <Tag name='album1' description='Tangerine Rye - Album' price='£ 2.99'/>
                </div>
                <div className={merch.tile}>
                    <img className={merch.pic} src={single1} alt='Single1 Cover'/>
                    <Tag name='single1' description='La La Lemon - Single' price='£ 0.99'/>
                </div>
                <div className={merch.tile}>
                    <img className={merch.pic} src={single2} alt='Single2 Cover'/>
                    <Tag name='single2' description='Honey - Single' price='£ 0.99'/>
                </div>
            </div>
 */