import React from 'react';
import styles from './Fretboard.module.css';

const FretNumbers = ({ numFrets }) => {
  const fretNumbers = Array.from({ length: numFrets + 1 }, (_, i) => i);
  const markers = { 3: '•', 5: '•', 7: '•', 9: '•', 12: '••', 15: '•', 17: '•', 19: '•', 21: '•', 24: '••' };

  return (
    <>
        <div className={styles.fretNumbers}>
        {fretNumbers.map(number => (
            <div key={number} className={styles.fretNumber}>
            {number > 0 ? number : ''}
            </div>
        ))}
        </div>
        <div className={styles.fretMarkers}>
            {fretNumbers.map(number => (
                <div key={number} className={styles.fretMarker}>
                    {markers[number] || ''}
                </div>
            ))}
        </div>
    </>
  );
};

export default FretNumbers;
