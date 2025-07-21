import React from 'react';
import styles from './Fretboard.module.css';
import { noteColors } from '@/lib/notes';

const Note = ({ name, selectedNote, fretNumber, selectedScaleNotes }) => {
    const isVisibleByNote = !selectedNote || selectedNote === name;
  const isVisibleByScale = !selectedScaleNotes || selectedScaleNotes.includes(name);
  const isVisible = isVisibleByNote && isVisibleByScale;
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
