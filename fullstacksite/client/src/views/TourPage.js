import React from 'react';
import OverHeadBar from "./OverHeadBar";
import IconBar from './IconBar';
import headBar from "../views/OverHeadBar.module.css";

function TourPage() {
    return (
        <div className={headBar.overview}>
            <OverHeadBar currentPage='tour'/>
            <IconBar />
        </div>
    );
}

export default TourPage;