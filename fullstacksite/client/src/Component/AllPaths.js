import {Route} from "react-router-dom";
import React from "react";
import HomePage from "../views/HomePage";
import MusicPage from "../views/MusicPage";
import MerchPage from "../views/MerchPage";
import TourPage from "../views/TourPage";
import AboutPage from "../views/AboutPage";
import DetailPage from "../views/DetailPage";

function AllPaths() {
    return (
        <div>
            <Route path='/' exact render={HomePage} />
            <Route path='/music' render={MusicPage} />
            <Route path='/tour' render={TourPage} />
            <Route path='/about' exact render={AboutPage} />
            <Route path='/merch?id=:id' exact component={DetailPage} />
            <Route path='/merch' exact component={MerchPage} />
        </div>
    )
}

export default AllPaths