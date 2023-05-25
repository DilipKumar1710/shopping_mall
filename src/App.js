import {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import RegisterForm from './Components/RegisterForm/index';
import LoginForm from './Components/LoginForm/index';
import Header from './Components/Header/index';
import NotFound from './Components/NotFound/index';
import ProtectedRoute from './Components/ProtectedRoute/index';
import ShoppingMall from './Components/ShoppingMall/index';

class App extends Component{
  render(){
    return (
      <>
        <Header/>
        <Switch>
          <Route exact path = "/register" component = {RegisterForm}/>
          <Route exact path = "/login" component = {LoginForm}/>
          <ProtectedRoute exact path = "/" component = {ShoppingMall}/>
          <Route component = {NotFound}/>
        </Switch>
      </>
    )
  }
}

export default App;