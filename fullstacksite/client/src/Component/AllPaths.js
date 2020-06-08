import {Route} from "react-router-dom";
import React from "react";
import HomePage from "../views/HomePage";
import MusicPage from "../views/MusicPage";
import MerchPage from "../views/MerchPage";
import TourPage from "../views/TourPage";
import AboutPage from "../views/AboutPage";
import DetailPage from "../views/DetailPage";
import ShoppingCartPage from "../views/ShoppingCartPage";

function AllPaths() {
    return (
        <div>
            <Route path='/' exact render={HomePage} />
            <Route path='/music' exact render={MusicPage} />
            <Route path='/tour' exact component={TourPage} />
            <Route path='/merch' exact component={MerchPage} />
            <Route path='/about' exact render={AboutPage} />
            <Route path='/merch/:id' exact component={DetailPage} />
            <Route path='/cart' exact component={ShoppingCartPage} />
        </div>
    )
}

export default AllPaths