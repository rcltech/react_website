import React from 'react';
import Rcapp from "./Rcapp"
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import Rclogo from "./Logo.png"
import Avatar from '@material-ui/core/Avatar';
import { Divider, List } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import Sean from './seanchok.jpg'
import Utkarsh from "./utkarsh.jpg"
import Welvin from "./welvin.png"
import Siddhant from "./siddhant.jpg"
import Gela from './gela.jpg'
import Event1 from "./jsposter.png" 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height:"80px",
    backgroundColor:"#25727F",
  }
}));

const useStyles1 = makeStyles(theme => ({
  root: {
    width: "250px",
    height:"250px",
  }
}));

export default function Menu(){
  const classes = useStyles()
  const classes1 = useStyles1()
    return(
        <div className={classes.root} >
          <h2 style={{textAlign:'center',color:'white'}}>our apps</h2>
          <Tabs variant="scrollable" indicatorColor="secondary"
          scrollButtons="auto">
          <Rcapp logo={Rclogo} name="smart laundry machine" link="https://sls.rctech.club/" content="hello! this is smart washine machine"/>
          <Tab></Tab>
          <Rcapp logo={Rclogo} name="xxx" link="https://sls.rctech.club/" content="hello! this is smart washine machine"/>
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
          <Avatar src={Utkarsh} size="large" className={classes1.root}/>
          <div style={{textAlign:"center"}}><p>this is ...</p></div>
        </Box>
        <Box flexShrink={1} >
        <Avatar src={Sean} size="large" className={classes1.root}/>
          <p style={{textAlign:"center"}}>this is ...</p>
        </Box>
        <Box flexShrink={1} >
        <Avatar src={Gela} size="large" className={classes1.root}/>
          <p style={{textAlign:"center"}}>this is ...</p>
        </Box>
        <Box flexShrink={1} >
        <Avatar src={Siddhant} size="large" className={classes1.root}/>
          <p style={{textAlign:"center"}}>this is ...</p>
        </Box>
        <Box flexShrink={1} >
        <Avatar src={Welvin} size="large" className={classes1.root}/>
          <p style={{textAlign:"center"}}>this is ...</p>
        </Box>
      </Box>
      </Container>
    </div>
    <Divider variant='middle'/>
    <div>
      <Box display="flex" justifyContent="space-around">
        <List>
          <ListItem component="a" href="https://material-ui.com/zh/api/list-item/#import" divider="true"><font size="5" color="white">JS workshop</font></ListItem>
          <ListItem ><img src={Event1} style={{height:"350px",width:"220px"}}></img></ListItem>
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