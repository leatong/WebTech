import React from "react";
import merch from "../views/MerchPage.module.css"

function Tag(props) {
    return(
        <div className={merch.tile}>
            <div className={merch.tag}>
                <p className={merch.name}>{props.name}</p>
                <p className={merch.price}>{props.price}</p>
            </div>
        </div>
    )
}

export default Tag;
