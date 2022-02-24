import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from '../src/container/home'
import NewPost from './container/newPost';
import Detail from './container/detail';

function App() {
  return (
    <div className="App" data-testid="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewPost />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </div>
  );
}

export default App;
