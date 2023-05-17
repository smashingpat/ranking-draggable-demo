import image1 from './assets/duo_1.png';
import image2 from './assets/duo_2.png';
import image3 from './assets/duo_3.png';
import image4 from './assets/duo_4.png';
import image5 from './assets/duo_5.png';

type Character = {
  id: string;
  name: string;
  image: string;
};

const characters: Character[] = [
  { id: '1', name: 'Rhythm & Rhyme', image: image1 },
  { id: '2', name: 'The Groove Squad', image: image2 },
  { id: '3', name: 'Sound Waves', image: image3 },
  { id: '4', name: 'Syncopation Station', image: image4 },
  { id: '5', name: 'The Mix Master', image: image5 },
];

export default characters;
