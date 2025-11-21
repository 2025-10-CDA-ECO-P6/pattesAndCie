import styles from "./page.module.css";
import animalsData from '../data/animals.json';
import Link from "next/link";
import AnimalCard from '@/components/AnimalCard';
import Nav from '@/components/Nav';



export default function Home() {
   return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1 className={styles.titleBox}>
          Bienvenue à la clinique Patte & Cie 🐾
        

        <p>
          Découvrez nos animaux et consultez leur carnet de santé digitalisé. 
          Cliquez sur une carte pour plus de détails !
        </p>
        </h1>
      </section>


      <section className={styles.animalsGrid}>
        {animalsData.animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </section>

      <Nav />
    </main>
  );
}
