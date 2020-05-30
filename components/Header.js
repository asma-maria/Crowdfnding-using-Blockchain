import React from 'react';

import {Menu,Button} from 'semantic-ui-react';
import {Link} from '../routes';


const divStyle1 = {
    border: '10px outset rgb(255, 153, 153)',
   
    backgroundColor:'rgb(255, 102, 102)',
    marginTop:'20px'
  
  };
  const divStyle2 = {
    //border: '5px solid grey',
    color: 'blue',
    fontSize: '20px',
    //backgroundColor:'black',
    textAlign: 'center'
    // backgroundImage: 'url(' + imgUrl + ')',
   // margin:'10px'
  };


 export default()=>{


     return(
        
       
        <Menu size='massive' style={divStyle1}>
             <Menu.Item>
                 <Link route="/">
                     <img src='https://www.logodesignteam.com/images/portfolio-images/investment-crowdfunding-logo-design/investment-crowdfunding-logo-design-new2.jpg' />
                 </Link>
             </Menu.Item>

             <Link route="/">
                 <a className="item" style={divStyle2}>
                     Crowd Fund
                 </a>
             </Link>
             <Menu.Menu position="right">
             <Link route="/">
                 <a className="item">
                     Campaign
                 </a>
             </Link>
             <Link route="/campaigns/new">
                <a className="item">
                 <Button  color="google plus" animated >
                 <Button.Content visible>+</Button.Content>
                         <Button.Content hidden>
                          Ready!
                     </Button.Content>
                   </Button>  
                </a>
             </Link>
             <Menu.Item>
                 <Link route="/">
                     <img src='https://www.logodesignteam.com/images/portfolio-images/investment-crowdfunding-logo-design/investment-crowdfunding-logo-design-new12.jpg' />
                 </Link>
             </Menu.Item>

             </Menu.Menu>
            
         </Menu>
        

     );

 };


// const navbar=()=>{
   
//     return(
//         <nav className="nav-wrapper grey darken-1">

//                 <div>
//                     <Link to='/' className="brand-logo">Crowd Fund</Link>

//                 </div>
//         </nav> 
//     )


// }
// export default navbar;