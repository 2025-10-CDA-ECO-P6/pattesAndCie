import styles from "./page.module.css";
import animalsData from '../data/animals.json';
import Link from "next/link";
import AnimalCard from '@/components/AnimalCard';



export default function Home() {
  return (
    <>
    <h1>Liste des animaux</h1>
      <div>
        {animalsData.animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
}
