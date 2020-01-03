import React from 'react';
import Rcapp from "./Rcapp"
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import Rclogo from "./Logo.png"
import { Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';

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
          <h2 style={{textAlign:'center',color:'white'}}>our apps</h2>
          <Tabs variant="scrollable" indicatorColor="secondary"
          scrollButtons="auto">
          <Rcapp logo={Rclogo} link="http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router" content="hello! this is smart washine machine"/>
          <Tab></Tab>
          <Rcapp logo={Rclogo} link="http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router" content="hello! this is "/>
          <Tab></Tab>
          <Rcapp logo={Rclogo} link="http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router" content="hello! this is "/>
          <Tab></Tab>
          <Rcapp logo={Rclogo} link="http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router" content="hello! this is "/>
          <Tab></Tab>
          <Rcapp logo={Rclogo} link="http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router" content="hello! this is "/>
          <Tab></Tab>
          <Rcapp logo={Rclogo} link="http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router" content="hello! this is "/>
          <Tab></Tab>
          <Rcapp logo={Rclogo} link="http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router" content="hello! this is "/>
          <Tab></Tab>
            </Tabs>
            <Divider variant='middle'/>
            <div style={{ width: '100%' }}>
            <Container maxWidth="md">
            <Box 
        display="flex"
        flexWrap="wrap"
        flexShrink={1} 
      >
    <Box >
          <img src={Rclogo}  width="250px"></img>
          <p>this is ...</p>
        </Box>
        <Box >
          <img src={Rclogo}  width="250px"></img>
          <p>this is ...</p>
        </Box>
        <Box >
          <img src={Rclogo}  width="250px"></img>
          <p>this is ...</p>
        </Box>
        <Box >
          <img src={Rclogo}  width="250px"></img>
          <p>this is ...</p>
        </Box>
      </Box>
      </Container>
    </div>
     
        </div>
    )
}