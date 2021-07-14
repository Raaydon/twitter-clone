import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';
import Dashboard from './pages/Dashboard';

import { AuthProvider } from './contexts/AuthContext';

import { Container, Wrapper } from './styles/styles';

export default function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path={["/login",'/signup','/forgot-password','/update-profile','/dashboard']}>
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '100vh' }}
              >
                <div className="w-100" style={{ maxWidth: '400px' }}>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/dashboard"
                      component={Dashboard}
                    />
                    <PrivateRoute
                      path="/update-profile"
                      component={UpdateProfile}
                    />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                  </Switch>
                </div>
              </Container>
            </Route>
            <Route path="/">
              <Container>
                <Wrapper>
                  <MenuBar />
                  <GlobalStyles />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/bookmarks" component={Bookmarks} />
                    <Route path="/lists" component={Lists} />
                    <Route path="/profile" component={Profile} />
                  </Switch>
                  <SideBar />
                </Wrapper>
              </Container>
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}
