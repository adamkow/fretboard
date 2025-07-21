import React from 'react';
import Note from './Note';
import styles from './Fretboard.module.css';
import { getNoteFromFret } from '@/lib/music';

const Fret = ({ fretNumber, openStringNote }) => {
  const noteName = getNoteFromFret(openStringNote, fretNumber);

  return (
    <div className={styles.fret}>
      <div className={styles.stringLine}></div>
      <Note name={noteName} />
    </div>
  );
};

export default Fret;
