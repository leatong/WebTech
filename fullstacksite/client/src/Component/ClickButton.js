import { Link } from "react-router-dom";
import React from 'react';
import { OutlinedButton, HeadBarButtonActive, HeadBarButtonInactive } from '../views/ButtonStyle'
import Button from "@material-ui/core/Button";
import buttons from "../views/Buttons.module.css";

export function ClickHomeButton(props) {
    return (
        <Link to={`/${props.path}`} >
            <OutlinedButton variant={props.buttonStyle}>{props.name}</OutlinedButton>
        </Link>
    );
}

export function ClickDetailButton(props) {
    return (
        <Link to={`/merch/${props.path}`} >
            <Button className={buttons.detailButton} variant='contained'>
                DETAILS
            </Button>
        </Link>
    );
}

export function ClickHeadBar(props) {
    if (props.path === props.currentPage) {
        return (
            <Link to={`/${props.path}`} >
                <HeadBarButtonActive variant='contained' endIcon={props.endIcon}>
                        {props.name}
                </HeadBarButtonActive>
            </Link>
        )
    } else {
        return (
            <Link to={`/${props.path}`} >
                <HeadBarButtonInactive endIcon={props.endIcon}>
                    {props.name}
                </HeadBarButtonInactive>
            </Link>
        )
    }
}

