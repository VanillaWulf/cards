import React from 'react';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';

import CardPage from "./pages/card-page/Card-page";
import OddPage from "./pages/odd-page/Odd-page";
import UserPage from "./pages/user-page/User-page";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
      <div className="App">
          <header>
              <nav className="navbar navbar-expand-lg bg-light">
                  <div className="container-fluid">
                      <a className="navbar-brand" href="#">EasyCardApp</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <Link className="nav-link" to="/">CardPage</Link>
                                  {/*<a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/odd">oddPage</Link>
                                  {/*<a className="nav-link" href="#">Features</a>*/}
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/user">userPage</Link>
                                  {/*<a className="nav-link" href="#">Pricing</a>*/}
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
        </header>
        <Routes>
          <Route path="/" element={<CardPage />} />
          <Route path="/odd" element={<OddPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
        {/*<button onClick={() => changeColor(3)}>clock</button>*/}
        {/*  <Card />*/}
        {/*  <CardBoard/>*/}
      </div>
  );
}

export default App;
