import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/detail" element={<Detail/>}></Route>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
