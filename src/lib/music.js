export const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const standardTuning = ['E', 'A', 'D', 'G', 'B', 'E'].reverse(); // High E on top

export const getNoteFromFret = (openStringNote, fretNumber) => {
  const openNoteIndex = notes.indexOf(openStringNote);
  if (openNoteIndex === -1) {
    return null;
  }
  const noteIndex = (openNoteIndex + fretNumber) % notes.length;
  return notes[noteIndex];
};
