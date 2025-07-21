import React from 'react';
import Fret from './Fret';
import styles from './Fretboard.module.css';

const String = ({ openNote, numFrets, selectedNote }) => {
  const frets = Array.from({ length: numFrets + 1 }, (_, i) => i);

  return (
    <div className={styles.string}>
      {frets.map(fretNumber => (
        <Fret key={fretNumber} fretNumber={fretNumber} openStringNote={openNote} selectedNote={selectedNote} />
      ))}
    </div>
  );
};

export default String;
