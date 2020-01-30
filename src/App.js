import React from 'react';
import  Rcmems from "./component/Rcmems"
import Rcapps from "./component/Rcapps"
import Rclogo from "./component/Logo.png"
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


function App() {
  return (
        <div
          style={{
            backgroundColor: "#25727F",
            width: '100%',
            height: "2000px",
          }}
        >
          <div>
          <img style={{height:'100px',display:'block',marginLeft:'auto',marginRight:'auto'}} src={Rclogo}/>
          <Divider variant='middle'/>
          </div>
          <div>
          <Rcapps/>
          </div>
          <div>
          <Rcmems/>
          </div>
        </div>
      );
    }

export default App;
