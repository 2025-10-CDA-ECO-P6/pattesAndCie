import animalsData from '@/data/animals.json';
import ownersData from '@/data/owners.json';
import vaccinesData from '@/data/vaccins.json';
import visitsData from '@/data/visits.json';
import treatmentsData from '@/data/treatments.json';
import BackButton from "@/components/BackButton";
import styles from './page.module.css';
import AccordionCard from '@/components/AccordionCard';
import Nav from '@/components/Nav';
import { getNextAppointment } from '@/components/NextAppointment';


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
            <div className={styles["cards-container"]}>

                <AccordionCard title="Propriétaire">
                    <p><strong>Nom :</strong> {owner.nom}</p>
                    <p><strong>Téléphone :</strong> {animal.telProprio}</p>
                </AccordionCard>

                <AccordionCard title="Vaccins">
                    <p>{vaccine.length > 0 ? vaccine.map(v => v.nom).join(", ") : "Aucun vaccin"}</p>
                </AccordionCard>

                <AccordionCard title="Traitements">
                    <p>{treatment.length > 0 ? treatment.map(t => t.nom).join(", ") : "Aucun traitement"}</p>
                </AccordionCard>

                <AccordionCard title="Visites">
                    {visit.length > 0 ? (
                        <>
                            {/* 🔹 Historique des visites */}
                            {visit
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .map(v => (
                                    <div key={v.id} style={{ marginBottom: "12px" }}>
                                        <p><strong>Date :</strong> {new Date(v.date).toLocaleDateString()}</p>
                                        <p><strong>Motif :</strong> {v.motif}</p>
                                        <p><strong>Note :</strong> {v.note || "RAS"}</p>
                                    </div>
                                ))}

                            {/* 🔹 Prochaine visite */}
                            {(() => {
                                const { nextDate } = getNextAppointment(animal.id);

                                return (
                                    <div style={{ marginTop: "18px", padding: "12px 0", borderTop: "2px solid #ccc" }}>
                                        <h3 style={{ marginBottom: "6px" }}>Prochaine visite :</h3>
                                        {nextDate ? (
                                            <p>{nextDate.toLocaleDateString()}</p>
                                        ) : (
                                            <p>Aucune visite antérieure</p>
                                        )}
                                    </div>
                                );
                            })()}
                        </>
                    ) : (
                        <p>Aucune visite</p>
                    )}
                </AccordionCard>
            </div>

            <div className={styles.navbar}>
                <Nav />
            </div>
        </div>
    );
}