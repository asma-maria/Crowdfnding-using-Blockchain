import React from 'react';
import Header from './Header';

import {Container, Card, Grid} from 'semantic-ui-react';
import  Head  from 'next/head';
import {Helmet} from 'react-helmet';

export default props=>{
    return(
        <Container>

             <Helmet>
                <style>{'body { background-color: rgb(26, 9, 0); }'}</style>
            </Helmet> 
            <Head>
                    <link
                     rel="stylesheet"
                      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" 
                    />
            </Head>
     <Header/>
 
 
            {props.children}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <footer className="footer text-center"> 
          <div >
                <center><h4 style={{ fontFamily:' serif',color:"white"}}> &copy;2020 Crowd Fund-All rights reserved</h4> </center>
          </div>

          </footer>

        </Container>
        
    );
};