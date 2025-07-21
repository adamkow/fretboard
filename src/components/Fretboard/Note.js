import React from 'react';
import styles from './Fretboard.module.css';
import { noteColors } from '@/lib/music';

const Note = ({ name, selectedNote, fretNumber }) => {
  const isVisible = !selectedNote || selectedNote === name;
  const color = noteColors[name];

  return (
    <div
      className={`${styles.note} ${isVisible ? '' : styles.hidden}`}
      style={{
        backgroundColor: color,
        transform: fretNumber > 0 ? 'translateX(130%)' : 'none',
      }}
    >
      {name}
    </div>
  );
};

export default Note;
