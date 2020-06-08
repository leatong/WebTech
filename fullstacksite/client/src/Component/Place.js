import React, {Component} from 'react';

class Place extends Component{
    render() {
        const { city, country, date } = this.props.tour;
        return (
            <p>
               {city}, {country}, {date}
            </p>
        );
    }
}

export default Place;