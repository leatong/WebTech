import React, {Component} from 'react';
import OverHeadBar from "./OverHeadBar";
import detailPage from "./DetailPage.module.css";
import Product from "../Component/Product";

class DetailPage extends Component{
    state = {
        loading: true,
        details: null,
        picId: 0
    };

    async componentDidMount() {
        const response = await fetch(`/api/products/${this.props.match.params.id}`);
        const product = await response.json();
        this.setState({loading: false, details: product})
        console.log(this.props);
        console.log(this.state.details.length);
    }

    render() {
        if (this.state.loading) return <div>loading...</div>
        if (!this.state.details) return <div>no detail to display</div>
        const {name, picture, description, price} = this.state.details[0];
        /*const images = [];
        for (let i=0; i<this.state.details.length; i++) {
            images.push(this.state.details[i].picture);
        }*/

        return (
            <div>
                <OverHeadBar currentPage='SHOP'/>
                <div className={detailPage.overview}>
                    <div className={detailPage.image}>
                        <div className={detailPage.left}>
                            {this.state.details.map((detail) => {
                            return <img className={detailPage.smallpic} src={`/assets/${detail.picture}`}/>})}
                        </div>
                        <div className={detailPage.right} >
                            <img className={detailPage.right} src={`/assets/${this.state.details[0].picture}`} />
                        </div>
                    </div>
                    <div className={detailPage.text}>
                        <div className={detailPage.name}>{name}</div>
                        <div className={detailPage.description}>{description}</div>
                        <div className={detailPage.price}>{`£ ${price}`}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPage;