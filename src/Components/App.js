import React from 'react';
import { Provider } from 'react-redux'
import store from '../Redux/store'
import Routes from '../Routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import { Container } from 'react-bootstrap';
import NavBar from './Header/Navbar';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <div className="main_container">
          <Container fluid>
            <Router>
              <Routes />
            </Router>
          </Container>
        </div>

      </div>
    </Provider>
  );
}

export default App;
