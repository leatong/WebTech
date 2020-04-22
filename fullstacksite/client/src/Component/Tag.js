import React from "react";
import merch from "../views/MerchPage.module.css"
import {ClickDetailButton} from "./ClickButton";

function Tag(props) {
    return(
        <div className={merch.tile}>
            <div className={merch.tag}>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <ClickDetailButton path={props.name}/>
            </div>
        </div>
    )
}

export default Tag;
