import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

// styles
import useStyles from "./styles";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages
import Dashboard from "../../pages/dashboard/Dashboard";
import Typography from "../../pages/typography/Typography";
import Notifications from "../../pages/notifications/Notifications";

function Layout (props) {
  var classes = useStyles();

  return (
    <div className={classes.root}>
      <>
        <Router>
          <Header history={props.history} />
          <div className='page-layout-wrp'>
            <Sidebar />
            <div className='right-side-wrp'>
              <div className={classes.fakeToolbar} />

              <Switch>
                <Route exat path='/chat' component={Typography} />
                <Route path='/' component={Dashboard} />
                <Route path='/notifications' component={Notifications} />
                <Route
                  exact
                  path='/app/ui'
                  render={() => <Redirect to='/app/ui/icons' />}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    </div>
  );
}

export default Layout;
