import React from 'react';
import {
    BrowserRouter as Router,
    Route

} from "react-router-dom";

import {HeaderMain} from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Report from './components/Report.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import ReportEdit from './components/ReportEdit.js';

function App() {
    return (
        <Router>
            <div>
                <HeaderMain/>
                <div className="app_content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/reports/week/:kmom" component={Report}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reports/edit/:kmom" component={ReportEdit}/>

                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
