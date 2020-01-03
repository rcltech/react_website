import React from 'react';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "./Logo.png"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    top: "0px",
    left: '0px',
    width: '80px',
    height: '80px',
    
  },
}));

export default function Rcapp(props){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleClick = event => {
      setAnchorEl(event.target);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl)
    const id = 1
   
    return(
        <div>
          <a href={props.link}><img src={props.logo} className={classes.root}></img></a>
            <Button fullWidth="true" aria-describedby={id}  onClick={handleClick}>xxx
      </Button>
      <Popover
        id ={open}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
<Typography>{props.content}</Typography>
      </Popover>
        </div>
    )
}