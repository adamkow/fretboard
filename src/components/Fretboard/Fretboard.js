'use client';

import React, { useState } from 'react';
import String from './String';
import FretNumbers from './FretNumbers';
import NoteFilter from './NoteFilter';
import styles from './Fretboard.module.css';
import { standardTuning } from '@/lib/music';

const Fretboard = ({ numFrets = 24 }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  return (
    <div>
      <div className={styles.fretboardContainer}>
        <div className={styles.fretboard}>
          {standardTuning.map((note, index) => (
            <String key={index} openNote={note} numFrets={numFrets} selectedNote={selectedNote} />
          ))}
        </div>
        <FretNumbers numFrets={numFrets} />
      </div>
      <NoteFilter selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
    </div>
  );
};

export default Fretboard;
