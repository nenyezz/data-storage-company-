import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/pricing' exact component={Pricing} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
