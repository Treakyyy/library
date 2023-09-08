import React from 'react';
import './Header.css';
import Search from './Search/Search';
import { searchBooks } from '../../store/bookSlice';
import Sort from './Sort/Sort';

const Header = () => {


  return (
    <div className='header'>
      <h1>Search for books</h1>
      <Search />
      <Sort searchBooks={searchBooks}/>
    </div>
  );
};

export default Header;