import { Link } from "react-router-dom";
import React from 'react';
import { StyledButton } from '../views/ButtonStyle'

function ClickButton(props) {    return (
        <Link to={`/${props.path}`} style={{ textDecoration: 'none' }}>
            <StyledButton variant='outlined'>{props.name}</StyledButton>
        </Link>
    );
}

export default ClickButton