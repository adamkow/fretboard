import React from 'react';
import { notes, noteColors } from '@/lib/music';
import styles from './Fretboard.module.css';

const NoteFilter = ({ selectedNote, onNoteSelect }) => {
  return (
    <div className={styles.noteFilterContainer}>
      <h3 className={styles.filterTitle}>Filter by Note</h3>
      <div className={styles.noteFilter}>
        <button
          className={`${styles.noteButton} ${!selectedNote ? styles.active : ''}`}
          onClick={() => onNoteSelect(null)}
        >
          All
        </button>
        {notes.map(note => (
          <button
            key={note}
            className={`${styles.noteButton} ${selectedNote === note ? styles.active : ''}`}
            onClick={() => onNoteSelect(selectedNote === note ? null : note)}
            style={{ backgroundColor: noteColors[note] }}
          >
            {note}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NoteFilter;
