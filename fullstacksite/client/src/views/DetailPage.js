import React, {Component} from 'react';
import OverHeadBar from "./OverHeadBar";
import detailPage from "./DetailPage.module.css";
import Button from "@material-ui/core/Button";
import {UpdateCart} from "../Component/UpdateCart";

class DetailPage extends Component{
    state = {
        loading: true,
        details: null,
        picId: 0,
        size: 'S',
        count: 0
    };

    async componentDidMount() {
        const response = await fetch(`/api/products/${this.props.match.params.id}`);
        const product = await response.json();
        this.setState({loading: false, details: product})
        console.log(this.props);
        console.log(this.state.details.length);
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

    addToCart = () => {return UpdateCart(this.state, this.props.match.params.id)}

    render() {
        if (this.state.loading) return <div>loading...</div>
        if (!this.state.details) return <div>no detail to display</div>
        const {name, description, price} = this.state.details[0];

        return (
            <div>
                <OverHeadBar currentPage='SHOP'/>
                <div className={detailPage.overview}>
                    <div className={detailPage.image}>
                        <div className={detailPage.left}>
                            {this.state.details.map((detail, index) => {
                            return (
                                <div key={index}>
                                    <img className={detailPage.smallpic}
                                         onClick={()=>{this.setState({picId: index})}}
                                         src={`/assets/${detail.picture}`}/>
                                </div>)})}
                        </div>
                        <div className={detailPage.right} >
                            <img className={detailPage.largepic}
                                 src={`/assets/${this.state.details[this.state.picId].picture}`} />
                        </div>
                    </div>
                    <div className={detailPage.text}>
                        <div className={detailPage.name}>{name}</div>
                        <div className={detailPage.description}>{description}</div>
                        <div className={detailPage.price}>{`£ ${price}`}</div>
                        <div className={detailPage.sizebox}>
                            <Button className={this.state.size==='S'? detailPage.sizebuttonActive : detailPage.sizebuttonInactive}
                                    onClick={()=>this.setState({size: 'S'})}
                                    disableElevation={true} key={0}>
                                S
                            </Button>
                            <Button className={this.state.size==='M'? detailPage.sizebuttonActive : detailPage.sizebuttonInactive}
                                    onClick={()=>this.setState({size: 'M'})}
                                    disableElevation={true} key={1}>
                                M
                            </Button>
                            <Button className={this.state.size==='L'? detailPage.sizebuttonActive : detailPage.sizebuttonInactive}
                                    onClick={()=>this.setState({size: 'L'})}
                                    disableElevation={true} key={2}>
                                L
                            </Button>
                        </div>
                        <div className={detailPage.amountbox}>
                            <button className={detailPage.incrementButton} id="decrement" onClick={this.decrement}>-</button>
                            <input className={detailPage.amount} type="number" value={this.state.count} readOnly={true}/>
                            <button className={detailPage.incrementButton} id="increment" onClick={this.increment}>+</button>
                        </div>
                        <div className={detailPage.cartButton}>
                            <Button variant='outlined' color="default"
                                    style={{background: 'white', fontWeight: 'bold', width: '100%'}}
                                    onClick={this.state.count>0? this.addToCart : null}>
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPage;