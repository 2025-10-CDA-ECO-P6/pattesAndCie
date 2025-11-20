import Image from "next/image";
import styles from "./page.module.css";
import AnimalCard from "../components/AnimalCard";
import animalsData from '../data/animals.json';
import Link from "next/link";

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
