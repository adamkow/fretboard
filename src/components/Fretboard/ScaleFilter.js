import React from 'react';
import { notes, scaleIntervals, noteColors } from '@/lib/notes';
import styles from './Fretboard.module.css';

const ScaleFilter = ({ rootNote, scaleType, setRootNote, setScaleType }) => {

  const clearFilter = () => {
    setRootNote(null);
    setScaleType(null);
  };

  return (
    <div className={styles.noteFilterContainer}>
      <h3 className={styles.filterTitle}>Filter by Scale</h3>
      <div className={styles.scaleFilterContainer}>
        <div className={`${styles.scaleSelectorsContainer} w-full`}>
          <div className="flex items-center justify-center w-full gap-2.5">
            <button onClick={clearFilter} className={`${styles.noteButton} ${styles.allButton} ${!rootNote && !scaleType ? styles.active : ''}`}>All</button>
            <div className={styles.scaleSelector}>
              {notes.map(note => (
                <button
                  key={note}
                  onClick={() => setRootNote(note)}
                  className={`${styles.noteButton} ${rootNote === note ? styles.active : ''}`}
                  style={{ backgroundColor: noteColors[note] }}
                >
                  {note}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.scaleSelector}>
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
    </div>
  );
};

export default ScaleFilter;
