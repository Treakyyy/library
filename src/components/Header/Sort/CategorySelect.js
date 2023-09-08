import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../../../store/bookSlice';

function CategorySelect({ searchBooks, selectedSort }) {
    const selectedCategory = useSelector((state) => state.books.selectedCategory);
    const dispatch = useDispatch();
  
    const handleCategoryChange = (e) => {
      dispatch(setSelectedCategory(e.target.value));
      dispatch(searchBooks('', e.target.value, selectedSort));
    };
  
    return (
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">Все категории</option>
        <option value="art">Искусство</option>
        <option value="biography">Биография</option>
        <option value="computers">Компьютеры</option>
        <option value="history">История</option>
        <option value="medical">Медицина</option>
        <option value="poetry">Поэзия</option>
      </select>
    );
  }

export default CategorySelect;