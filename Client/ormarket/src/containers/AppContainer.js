import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {Grid,Row} from 'react-flexbox-grid';
import AppBarCustom from '../components/AppBarCustom'
import Routes from '../components/Routes'

    

const AppContainer = ()=>{   
    return(
        <Grid>          
            <Router>
                <Row>
                    <AppBarCustom/>
                </Row>
                <Row>
                    <Routes />  
                </Row>
            </Router>
        </Grid>        
    )

};
export default AppContainer