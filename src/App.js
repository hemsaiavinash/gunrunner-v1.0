import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import ContactPage from './containers/ContactPage';
import SamplePage from './containers/SamplePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        {/* 
          Exact is used above so that the homepage is loaded only when the path is 'exactly' "/".
          Otherwise, it will load homepage evertime it sees a path starting with "/".
          
          For more details, refer to this Stack Overflow thread:
          https://stackoverflow.com/a/49162423
        */}
          <Route path="/about" component={AboutPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/sample" component={SamplePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
