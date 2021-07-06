import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Logout from './Components/Logout';
import Intro from './Components/Intro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/logout' component={Logout} exact />
        </Switch>
      </Router>
      {isAuth === true ? <h1>Dashboard</h1> : <Intro />}
    </div>
  );
};

export default App;