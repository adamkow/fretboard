import React from 'react';
import styles from './Fretboard.module.css';

const Note = ({ name }) => {
  return <div className={styles.note}>{name}</div>;
};

export default Note;
