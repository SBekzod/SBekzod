import React from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponents';
import Footer from './FooterCom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Staff from './StaffCom';

const Main = (prop) => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/staff" component={Staff} />
                <Route path="/menu" component={() => <Menu dishlar={prop.dishlar} />} />
                <Redirect to="/menu" />
            </Switch>
            <Footer />
        </div>


    );
}

export default Main;