import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom'; 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InstitutionListContainer from './components/InstitutionList/InstitutionListContainer';
import Navigation from './Navigation/Navigation';
import InstitutionDetailsContainer from './components/InstitutionDetails/InstitutionDetailsContainer';
import instAdminContainer from './components/InstitutionAdministration/InstAdminContainer'
import instUpdateContainer from './components/InstitutionUpdate/InstUpdateContainer';
import AdminPanelContainer from './components/AdminPanelContainer/AdminPanelContainer';
import InstCreateContainer from './components/InstitutionCreate/InstCreateContainer';

    var NoMatch = (props) => {
        var goApp = () => props.history.push("/institutions");
        return <div>Route did not match
        <button className="btn btn-secondary mx-2" onClick={goApp}>Go Home</button></div>;
        };
        const ServicesContext = React.createContext(null);
ReactDOM.render((       

    
    <BrowserRouter>
        {/* <ServicesContext.Provider value={{userService: userService}}> */}
        <Navigation>
            <Switch>
                
                <Route exact path='/institutions' component={InstitutionListContainer}/>
                <Route exact path='/admin' component={AdminPanelContainer}/>
                <Route exact path='/institutions/:title' component={InstitutionDetailsContainer}/>
                <Route exact path='/admin/institutions/' component={instAdminContainer}/>
                <Route exact path='/admin/institutions/:title/update' component={instUpdateContainer}/>
                <Route exact path='/admin/institutions/new' component={InstCreateContainer}/>
                <Route component={NoMatch} />
            </Switch>
        </Navigation>                                                                                                                                                                  
        {/* </ServicesContext.Provider>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */}
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to                                                                                                                                                                          work offline and load faster, you can change
// unregister() to re                                                                               gister() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

