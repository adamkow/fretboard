import React from 'react';
import String from './String';
import FretNumbers from './FretNumbers';
import styles from './Fretboard.module.css';
import { standardTuning } from '@/lib/music';

const Fretboard = ({ numFrets = 24 }) => {
  return (
    <div className={styles.fretboardContainer}>
      <div className={styles.fretboard}>
        {standardTuning.map((note, index) => (
          <String key={index} openNote={note} numFrets={numFrets} />
        ))}
      </div>
      <FretNumbers numFrets={numFrets} />
    </div>
  );
};

export default Fretboard;
