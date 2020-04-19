import {Route} from "react-router-dom";
import React from "react";
import HomePage from "../views/HomePage";
import MusicPage from "../views/MusicPage";
import MerchPage from "../views/MerchPage";
import TourPage from "../views/TourPage";

function AllPaths() {
    return (
        <div>
            <Route path='/' exact render={HomePage} />
            <Route path='/music' render={MusicPage} />
            <Route path='/tour' render={TourPage} />
            <Route path='/merch' render={MerchPage} />
        </div>
    )
}

export default AllPaths