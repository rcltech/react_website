import React from 'react';
import  Rcmems from "./component/Rcmems"
import Rcapps from "./component/Rcapps"
import Logoname from "./component/logo.png"
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
          <img style={{height:'200px',display:'block',marginLeft:'auto',marginRight:'auto'}} src={Logoname}/>
          <Divider variant='middle'/>
          </div>
          <div>
          <Rcapps/>
          </div>
        </div>
      );
    }

export default App;
