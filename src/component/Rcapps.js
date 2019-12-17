import React from 'react';
import Rcapp from "./Rcapp"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Rclogo from "./Logo.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height:"80px",
    backgroundColor:"#25727F",
  }
}));

export default function Menu(){
  const classes = useStyles()
    return(
        <div className={classes.root} >
          <AppBar color="#25727F">
          <Tabs color="#25727F" variant="scrollable"
          scrollButtons="auto">
          <Rcapp logo={Rclogo} link="http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router"/>
            </Tabs>
            </AppBar>
        </div>
    )
}