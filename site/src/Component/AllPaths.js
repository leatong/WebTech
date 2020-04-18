import {Route} from "react-router-dom";
import HomePage from "../views/HomePage";
import MusicPage from "../views/MusicPage";
import React from "react";
import {createPortal} from "react-dom";

function AllPaths() {
    return (
        <div>
            <Route path='/' exact render={HomePage} />
            <Route path='/music' render={MusicPage} />
            {/*<Route path='/enter' render={EnterPage} />*/}
            {/*<Route path='/tour' render={TourPage} />*/}
            {/*<Route path='/merch' render={MerchPage} />*/}
        </div>
    )
}

export default AllPaths