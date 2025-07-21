'use client';

import React, { useState, useEffect } from 'react';
import String from './String';
import FretNumbers from './FretNumbers';
import NoteFilter from './NoteFilter';
import ScaleFilter from './ScaleFilter';
import styles from './Fretboard.module.css';
import { standardTuning, getNotesInScale } from '@/lib/notes';

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

  const handleRootNoteSelect = (note) => {
    const newRootNote = rootNote === note ? null : note;
    setRootNote(newRootNote);

    if (newRootNote) {
      // If no scale is selected, default to major.
      // Otherwise, keep the existing scale type.
      if (!scaleType) {
        setScaleType('major');
      }
    } else {
      // If turning off the root note, also clear the scale type.
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
        setRootNote={handleRootNoteSelect}
        setScaleType={setScaleType}
      />
    </div>
  );
};

export default Fretboard;
