import { Link } from "react-router-dom";
import React from 'react';
import { OutlinedButton } from '../views/ButtonStyle'
import Button from "@material-ui/core/Button";

export function ClickHomeButton(props) {
    return (
        <Link to={`/${props.path}`} style={{textDecoration: 'none'}}>
            <OutlinedButton variant={props.buttonStyle}>{props.name}</OutlinedButton>
        </Link>
    );
}

export function ClickDetailButton(props) {
    return (
        <Link to={`/merch/${props.path}`} style={{textDecoration: 'none'}}>
            <Button variant='contained' style={{width: '200px', margin: '2px', padding: 0}}>
                DETAILS
            </Button>
        </Link>
    );
}

export function ClickHeadBar(props) {
    if (props.path === props.currentPage) {
        return (
            <Link to={`/${props.path}`} style={{textDecoration: 'none'}}>
                <Button variant='contained' disabled
                        style={{background:'#FF7A51', color:'white', width: '120px', height: '45px', fontSize: '20px'}}
                        endIcon={props.endIcon}>
                        {props.name}
                </Button>
            </Link>
        )
    } else {
        return (
            <Link to={`/${props.path}`} style={{textDecoration: 'none'}}>
                <Button color="inherit"
                        style={{color: 'tomato', width: '120px', height: '45px', fontSize: '20px'}}
                        endIcon={props.endIcon}>
                    {props.name}
                </Button>
            </Link>
        )
    }
}

