import React, {Component} from 'react';
import OverHeadBar from "./OverHeadBar";
import IconBar from "./IconBar";

class ShoppingCartPage extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <OverHeadBar currentPage='TOUR'/>
                <IconBar />
            </div>
        );
    }
}

export default ShoppingCartPage;