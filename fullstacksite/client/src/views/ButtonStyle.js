import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import React from "react";

export const OutlinedButton = withStyles({
    root: {
        background: 'white',/*'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%),'*/
        border: "1px solid",
        color: 'black',
        height: 48,
        margin: '10px',
        padding: '0 30px',
        "&:hover": {
            backgroundColor: "#FF7A51",
            color: 'white',
            textDecoration: 'none'
        }
    }
})(Button);

export const HeadBarButtonActive = withStyles({
    root: {
        backgroundColor: '#FF7A51',
        color: 'white',
        width: '120px',
        height: '45px',
        fontSize: '20px',
        boxShadow: 'none',
        "&:hover": {
            backgroundColor: '#FF7A51',
            color: 'white',
            cursor: 'normal',
            boxShadow: 'none'
        },
        "&:active": {
            boxShadow: 'none',
        },
        "&:focus": {
            outline: 'none',
        }
    }
})(Button);

export const HeadBarButtonInactive = withStyles({
    root: {
        color: '#FF7A51',
        backgroundColor: 'transparent',
        width: '120px',
        height: '45px',
        fontSize: '20px',
        "&:hover": {
            color: '#FF7A51'
        }
    }
})(Button);

export const AddToCartButton = withStyles({
    root: {
        background: 'white',
        fontWeight: 'bold',
        width: '100%',
        "&:hover": {
            backgroundColor: '#FF7A51',
            color: 'white',
        }
    }
})(Button);

export const BackToTopButton = withStyles({
    root: {
        fontWeight: 'bold'
    }
})(Button);