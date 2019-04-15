import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
class App extends Component {
  render() {
    return (
      <Router> <div>
          <NavBar />
          <Route name="home" exact path="/home" component={HomePage} />
          <div>
          <img src={"https://aowanders.com/wp-content/uploads/2017/06/Jobs-Fill-Your-Pockets-adventures-fill-your-soul.png.jpg"} />
        </div>
        </div>
      </Router>
    );
  }
};
export default App;