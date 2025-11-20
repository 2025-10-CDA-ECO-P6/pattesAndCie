import animalsData from '@/data/animals.json';
import ownersData from '@/data/owners.json';
import vaccinesData from '@/data/vaccins.json';
import visitsData from '@/data/visits.json';
import treatmentsData from '@/data/treatments.json';
import BackButton from "@/components/BackButton";


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
    <>
        <div>
        <h1>{animal.nom}</h1>

        <img 
        src={animal.image}
        alt={animal.nom}
        width={200}
        height={200}
        />

        <p><strong>Espèce :</strong> {animal.espece}</p>
        <p><strong>Race :</strong> {animal.race}</p>

        <h2>Informations propriétaire</h2>
        <p>{owner.nom}</p>
        <p><strong>Téléphone :</strong> {animal.telProprio}</p>

        <h2>Vaccins</h2>
        <p>{vaccine.length > 0 ? vaccine.map(v => v.nom).join(", ") : "Aucun vaccin"}</p>

        <h2>Visites</h2>
        <p>{visit.length > 0 ? visit.map(v => v.date).join(", ") : "Aucune visite"}</p>
        <p>Motif : {visit.length > 0 ? visit.map(v => v.motif).join(",") : "aucune visite"}</p>
        <p>Note : {visit.length > 0 ? visit.map(v => v.note).join(",") : "aucune visite"}</p>

        <h2>Traitements</h2>
        <p>{treatment.length > 0 ? treatment.map(t => t.nom).join(", ") : "Aucun traitement"}</p>
        </div>
        <BackButton />
    </>
    );
}