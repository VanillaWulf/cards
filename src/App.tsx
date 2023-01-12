import React from 'react';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';

import CardPage from "./pages/card-page/Card-page";
import OddPage from "./pages/odd-page/Odd-page";
import UserPage from "./pages/user-page/User-page";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch  = useDispatch();
  // const cards = useSelector(state => state.board);

  const changeColor = (id: number) => {
    console.log('click');
    dispatch({type: 'CHANGE_COLOR', payload: id});
  };

  return (
      <div className="App">
        <header>
          <Link to="/">CardPage</Link>
          <Link to="/odd">oddPage</Link>
          <Link to="/user">userPage</Link>
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
