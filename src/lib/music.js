export const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const standardTuning = ['E', 'A', 'D', 'G', 'B', 'E'].reverse(); // High E on top

export const noteColors = {
  'C': '#ff6b6b',
  'C#': '#ff8e6b',
  'D': '#ffd166',
  'D#': '#fcf67d',
  'E': '#a0e87a',
  'F': '#72d6a2',
  'F#': '#64b5f6',
  'G': '#8395f5',
  'G#': '#a78df5',
  'A': '#d085f5',
  'A#': '#f585d7',
  'B': '#f585a2',
};

export const scaleIntervals = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
};

export const getNotesInScale = (rootNote, scaleName) => {
  const intervals = scaleIntervals[scaleName];
  if (!rootNote || !scaleName || !intervals) return null;

  const scaleNotes = [rootNote];
  let currentNoteIndex = notes.indexOf(rootNote);

  for (const interval of intervals.slice(0, -1)) {
    currentNoteIndex = (currentNoteIndex + interval) % notes.length;
    scaleNotes.push(notes[currentNoteIndex]);
  }

  return scaleNotes;
};

export const getNoteFromFret = (openStringNote, fretNumber) => {
  const openNoteIndex = notes.indexOf(openStringNote);
  if (openNoteIndex === -1) {
    return null;
  }
  const noteIndex = (openNoteIndex + fretNumber) % notes.length;
  return notes[noteIndex];
};
