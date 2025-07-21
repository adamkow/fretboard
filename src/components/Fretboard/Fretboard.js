'use client';

import React, { useState, useEffect } from 'react';
import String from './String';
import FretNumbers from './FretNumbers';
import NoteFilter from './NoteFilter';
import ScaleFilter from './ScaleFilter';
import styles from './Fretboard.module.css';
import { standardTuning, getNotesInScale } from '@/lib/music';

const Fretboard = ({ numFrets = 24 }) => {
        const [selectedNote, setSelectedNote] = useState(null);
  const [rootNote, setRootNote] = useState(null);
  const [scaleType, setScaleType] = useState(null);
  const [selectedScaleNotes, setSelectedScaleNotes] = useState(null);

    useEffect(() => {
    const scaleNotes = getNotesInScale(rootNote, scaleType);
    setSelectedScaleNotes(scaleNotes);
    if (rootNote && scaleType) {
        setSelectedNote(null);
    }
  }, [rootNote, scaleType]);

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
    if (note) {
        setRootNote(null);
        setScaleType(null);
    }
  };
  return (
    <div>
      <div className={styles.fretboardContainer}>
        <div className={styles.fretboard}>
          {standardTuning.map((note, index) => (
                        <String
              key={index}
              openNote={note}
              numFrets={numFrets}
              selectedNote={selectedNote}
              selectedScaleNotes={selectedScaleNotes}
            />
          ))}
        </div>
        <FretNumbers numFrets={numFrets} />
      </div>
                  <NoteFilter selectedNote={selectedNote} onNoteSelect={handleNoteSelect} />
            <ScaleFilter 
        rootNote={rootNote}
        scaleType={scaleType}
        setRootNote={setRootNote}
        setScaleType={setScaleType}
      />
    </div>
  );
};

export default Fretboard;
