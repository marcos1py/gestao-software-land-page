import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './pages/BlogDetail'

import Portifolio from './pages/Portifolio';
import HomePage from './pages/HomePage';
import HomeBlog from './pages/HomeBlog';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<HomeBlog />} />
        <Route path="/blog/blog-detail/:id" element={<BlogDetail/>}></Route>

      </Routes>
    </Router>
  );
};

export default App;
