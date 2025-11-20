import animalsData from '@/data/animals.json';
import ownersData from '@/data/owners.json';
import vaccinesData from '@/data/vaccins.json';
import visitsData from '@/data/visits.json';
import treatmentsData from '@/data/treatments.json';
import BackButton from "@/components/BackButton";
import styles from './page.module.css';


export default async function detailsAnimal({ params }) {

    const {id} = await params;
    const animal = animalsData.animals.find((a) => a.id.toString() === id);
    const owner = ownersData.proprietaires.find(p => p.id === animal.proprioID);
    const vaccine = vaccinesData.vaccins.filter(v => animal.vaccins.includes(v.id));
    const treatment = treatmentsData.treatments.filter(t => animal.traitements.includes(t.id));
    const visit = visitsData.visits.filter(v => v.animalID === animal.id);

    if (!animal) {
        return <div>Animal non trouvé</div>;
    }   

    return (
        <div className={styles.container}>
            {/* En-tête */}
            <div className={styles.header}>
                <img src={animal.image} alt={animal.nom} />
                <div className={styles['header-info']}>
                    <h1>{animal.nom}</h1>
                    <p><strong>Espèce :</strong> {animal.espece}</p>
                    <p><strong>Race :</strong> {animal.race}</p>
                </div>
            </div>

            {/* Cartes d’informations */}
            <div className={styles['cards-container']}>
                <div className={styles.card}>
                    <h2>Propriétaire</h2>
                    <p><strong>Nom :</strong> {owner.nom}</p>
                    <p><strong>Téléphone :</strong> {animal.telProprio}</p>
                </div>

                <div className={styles.card}>
                    <h2>Vaccins</h2>
                    <p>{vaccine.length > 0 ? vaccine.map(v => v.nom).join(", ") : "Aucun vaccin"}</p>
                </div>

                <div className={styles.card}>
                    <h2>Traitements</h2>
                    <p>{treatment.length > 0 ? treatment.map(t => t.nom).join(", ") : "Aucun traitement"}</p>
                </div>

                <div className={styles.card}>
                    <h2>Visites</h2>
                    {visit.length > 0 ? visit.map(v => (
                        <div key={v.id}>
                            <p><strong>Date :</strong> {v.date}</p>
                            <p><strong>Motif :</strong> {v.motif}</p>
                            <p><strong>Note :</strong> {v.note}</p>
                        </div>
                    )) : <p>Aucune visite</p>}
                </div>
            </div>

            <div className={styles['back-button']}>
                <BackButton />
            </div>
        </div>
    );
}