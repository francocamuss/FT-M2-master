import React from 'react';
import s from '../Styles/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  console.log(s);
  return (
  <div className={s.container}>
    <input type="text" placeholder="Ciudad..."/>
    <button onClick={() => props.onSearch("Buscando ciudad")}>Agregar</button>
  </div>)
};