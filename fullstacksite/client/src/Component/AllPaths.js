import {Route} from "react-router-dom";
import React from "react";
import HomePage from "../views/HomePage";
import MusicPage from "../views/MusicPage";
import MerchPage from "../views/MerchPage";
import TourPage from "../views/TourPage";
import Tshirt1Page from "../views/Tshirt1Page";

function AllPaths() {
    return (
        <div>
            <Route path='/' exact render={HomePage} />
            <Route path='/music' render={MusicPage} />
            <Route path='/tour' render={TourPage} />
            <Route path='/merch' exact render={MerchPage} />
            <Route path='/merch/tshirt1' render={Tshirt1Page} />
        </div>
    )
}

export default AllPaths