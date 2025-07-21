import React from 'react';
import Note from './Note';
import styles from './Fretboard.module.css';
import { getNoteFromFret } from '@/lib/notes';

const Fret = ({ fretNumber, openStringNote, selectedNote, selectedScaleNotes }) => {
  const noteName = getNoteFromFret(openStringNote, fretNumber);

  return (
    <div className={styles.fret}>
      <div className={styles.stringLine}></div>
            <Note
        name={noteName}
        selectedNote={selectedNote}
        fretNumber={fretNumber}
        selectedScaleNotes={selectedScaleNotes}
      />
    </div>
  );
};

export default Fret;
