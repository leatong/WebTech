import React from 'react';
import OverHeadBar from "./OverHeadBar";
import IconBar from './IconBar';

function TourPage() {
    return (
        <div>
            <OverHeadBar currentPage='tour'/>
            <IconBar />
        </div>
    );
}

export default TourPage;