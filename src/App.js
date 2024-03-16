/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticleList/ArticlesList';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ArticlesList/>} />
        <Route path="/article/:id" element={<ArticleDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
