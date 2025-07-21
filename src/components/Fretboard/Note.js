import React from 'react';
import styles from './Fretboard.module.css';

const Note = ({ name, selectedNote }) => {
  const isVisible = !selectedNote || selectedNote === name;

  return <div className={`${styles.note} ${isVisible ? '' : styles.hidden}`}>{name}</div>;
};

export default Note;
