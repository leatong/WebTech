import {Route} from "react-router-dom";
import React from "react";
import HomePage from "../views/HomePage";
import MusicPage from "../views/MusicPage";
import MerchPage from "../views/MerchPage";
import TourPage from "../views/TourPage";
import Tshirt1Page from "../views/Tshirt1Page";
import AboutPage from "../views/AboutPage";

function AllPaths() {
    return (
        <div>
            <Route path='/' exact render={HomePage} />
            <Route path='/music' render={MusicPage} />
            <Route path='/tour' render={TourPage} />
            <Route path='/merch' exact render={MerchPage} />
            <Route path='/about' exact render={AboutPage} />
            <Route path='/merch/tshirt1' render={Tshirt1Page} />
            {/*<Route path='/merch/album1' render={Album1Page} />
            <Route path='/merch/album2' render={Album2Page} />*/}
        </div>
    )
}

export default AllPaths