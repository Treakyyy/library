import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BookSearch from './components/BookSearch/BookSearch';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="app">
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
