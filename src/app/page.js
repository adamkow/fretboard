import Fretboard from '@/components/Fretboard/Fretboard';

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', color: '#fff', margin: '2rem' ,fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold'}}>24-Fret Guitar Fretboard</h1>
      <Fretboard />
    </main>
  );
}
