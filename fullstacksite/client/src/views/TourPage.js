import React, {Component} from 'react';
import OverHeadBar from "./OverHeadBar";
import IconBar from './IconBar';
import tour from './TourPage.module.css';
import Place from '../Component/Place';

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
                        <p className={tour.heading}>2020 WORLD TOUR</p>
                            <p>loading...</p>
                        </div>
                    <IconBar />
                </div>
            )}
        if (!this.state.tourDates) {
            return (
                <div>
                    <OverHeadBar currentPage='tour'/>
                        <div className={tour.center}>
                        <p className={tour.heading}>2020 WORLD TOUR</p>
                            <p>Sorry, no tours happening currently!</p>
                        </div>
                    <IconBar />
                </div>
            )}

        return (
            <div>
                <OverHeadBar currentPage='tour'/>
                    <div className={tour.center}>
                        <p className={tour.heading}>2020 WORLD TOUR</p>
                        <div>
                            {this.state.tourDates.map((tour) => {
                                return <Place tour={tour} key={tour.id}/>})}
                        </div>
                    </div>
                <IconBar />
            </div>
        );
    }
}

export default TourPage;