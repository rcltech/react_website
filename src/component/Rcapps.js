import React from 'react';
import Rcapp from "./Rcapp"
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import Rclogo from "./Logo.png"
import { Divider, List } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';

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
            <h2 style={{textAlign:'center',color:'white'}}>our team</h2>
            <div style={{ width: '100%' }}>
            <Container maxWidth="lg">
            <Box 
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
      >
    <Box  flexShrink={1} >
          <img src={Rclogo}  width="250px"></img>
          <p>this is ...</p>
        </Box>
        <Box flexShrink={1} >
          <img src={Rclogo}  width="250px"></img>
          <p>this is ...</p>
        </Box>
        <Box flexShrink={1} >
          <img src={Rclogo}  width="250px"></img>
          <p>this is ...</p>
        </Box>
        <Box flexShrink={1} >
          <img src={Rclogo}  width="250px"></img>
          <p>this is ...</p>
        </Box>
      </Box>
      </Container>
    </div>
    <Divider variant='middle'/>
    <div>
      <Box display="flex" justifyContent="space-around">
        <List>
          <ListItem component="a" href="https://material-ui.com/zh/api/list-item/#import" divider="true"><font size="5" color="white">event1</font></ListItem>
          <ListItem >subevent</ListItem>
        </List>
        <List>
        <ListItem component="a" href="https://material-ui.com/zh/api/list-item/#import" divider="true"><font size="5" color="white">event2</font></ListItem>
        <ListItem >subevent</ListItem>
        </List>
        <List>
        <ListItem component="a" href="https://material-ui.com/zh/api/list-item/#import" divider="true"><font size="5" color="white">event3</font></ListItem>
        <ListItem >subevent</ListItem>
        </List>
        </Box>
      </div>
        </div>
    )
}