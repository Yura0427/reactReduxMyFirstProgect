import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React from 'react';
import { getAuthUserData } from './components/redux/auth-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return (
      // <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='aap-wrapper-content'>
            <Route path='/dialogs'
              render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?'
              render={() => <ProfileContainer />} />
            <Route path='/users'
              render={() => <UsersContainer />} />
            <Route path='/login'
              render={() => <LoginPage />} />
          </div>
        </div>
      // </BrowserRouter>
    );
  }

}

export default compose (
  withRouter,
  connect(null, { getAuthUserData })
  )(App)
// connect(null, { getAuthUserData })(App)
// export default App;
