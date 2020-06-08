import React, {Component} from 'react';
import OverHeadBar from "./OverHeadBar";
import IconBar from './IconBar';
import tour from './TourPage.module.css';

class TourPage extends Component {
    state = {
        loading: true,
        tourDates: null
    };

    async componentDidMount() {
        const response = await fetch('/api/tour');
        const tour = await response.json();
        this.setState({loading: false, tourDates: tour})
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <OverHeadBar currentPage='tour'/>
                        <div className={tour.center}>
                            loading...
                        </div>
                    <IconBar />
                </div>
            )}
        if (!this.state.tourDates) {
            return (
                <div>
                    <OverHeadBar currentPage='tour'/>
                        <div className={tour.center}>
                            Sorry, no tours happening currently!
                        </div>
                    <IconBar />
                </div>
            )}

        return (
            <div>
                <OverHeadBar currentPage='tour'/>
                    <div className={tour.center}>
                        
                    </div>
                <IconBar />
            </div>
        );
    }
}

export default TourPage;