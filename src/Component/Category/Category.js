import React from 'react';
import styles from './Category.css';

export default function SelectedCategory(props) {

  function onClick(){
    props.selectCategory(props.type)
  }
  
  return (
    <div className={styles.selected_card}>
      <div>{props.type}</div>
      <button onClick={onClick}>x</button>
    </div>
  )
}
