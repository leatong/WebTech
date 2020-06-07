import React, {Component} from 'react';
import detailPage from "../views/DetailPage.module.css";

class CountBox extends Component {
    render() {
        return (
            <div>
                <button className={detailPage.incrementButton} id="decrement" onClick={this.decrement}>-</button>
                <input className={detailPage.count} type="number" value={this.state.count} readOnly={true}/>
                <button className={detailPage.incrementButton} id="increment" onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default CountBox;