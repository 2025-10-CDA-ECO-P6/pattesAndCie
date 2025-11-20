import Link from 'next/link';
import animalsData from '../data/animals.json';
import Image from 'next/image';

export default function AnimalCard({ animal }) {

  return (
    <Link href={`/detailsAnimal/${animal.id}`}>
      <div className="animal-card">
        <h2>{animal.nom}</h2>
        <p>Espèce : {animal.espece}</p>
        <p>Race : {animal.race}</p>
      </div>
    </Link>
  );
}
