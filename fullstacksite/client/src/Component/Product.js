import React, {Component} from 'react';
import merch from "../views/MerchPage.module.css";
import Tag from "./Tag";
import {ClickDetailButton} from "./ClickButton";

class Product extends Component{
    render() {
        const { picture, description, name, price, id } = this.props.product;
        return (
            <div>
                <div className={merch.tile}>
                    <img className={merch.pic}
                         src={`assets/${picture}`}
                         alt={description}/>
                    <Tag name={name}
                         description={description}
                         price={`£ ${price}`}
                         id={id} />
                    <ClickDetailButton path={id}/>
                </div>
            </div>
        );
    }
}

export default Product;