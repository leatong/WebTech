import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

export const OutlinedButton = withStyles({
    root: {
        background: 'white',/*'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%),'*/
        borderRadius: 3,
        border: "1px solid",
        color: 'black',
        height: 48,
        margin: '10px',
        padding: '0 30px',
        "&:hover": {
            backgroundColor: "#FF7A51",
            color: 'white',
        }
    }
})(Button);