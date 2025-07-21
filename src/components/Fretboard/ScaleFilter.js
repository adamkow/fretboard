import React from 'react';
import { notes, scaleIntervals } from '@/lib/music';
import styles from './Fretboard.module.css';

const ScaleFilter = ({ rootNote, scaleType, setRootNote, setScaleType }) => {

  const clearFilter = () => {
    setRootNote(null);
    setScaleType(null);
  };

  return (
    <div className={styles.noteFilterContainer}>
      <h3 className={styles.filterTitle}>Filter by Scale</h3>
      <div className={styles.noteFilter}>
        <button onClick={clearFilter} className={`${styles.noteButton} ${!rootNote && !scaleType ? styles.active : ''}`}>All</button>
        <div className={styles.scaleSelector}>
          <span className={styles.selectorLabel}>Root:</span>
          {notes.map(note => (
            <button
              key={note}
              onClick={() => setRootNote(rootNote === note ? null : note)}
              className={`${styles.scaleButton} ${rootNote === note ? styles.active : ''}`}
            >
              {note}
            </button>
          ))}
        </div>
        <div className={styles.scaleSelector}>
          <span className={styles.selectorLabel}>Type:</span>
          {Object.keys(scaleIntervals).map(type => (
            <button
              key={type}
              onClick={() => setScaleType(scaleType === type ? null : type)}
              className={`${styles.scaleButton} ${scaleType === type ? styles.active : ''}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScaleFilter;
