// import visits from '@/data/visits.json';

// export default function getNextAppointment({ animalId }) {
//   const animalVisits = visits.visits.filter(visit => visit.animalID === animalId);

//   if (animalVisits.length === 0) {
//     // Pas de visite pour cet animal
//     return { lastDate: null, nextDate: null };
//   }

//   const lastVisit = animalVisits.sort((a, b) => new Date(b.date) - new Date(a.date))[0];

//   const lastDate = new Date(lastVisit.date);
//   const nextDate = new Date(lastDate);

//   nextDate.setFullYear(nextDate.getFullYear() + 1);

//   return { lastDate, nextDate };
// }

import visits from "@/data/visits.json";

export function getNextAppointment(animalId) {
  const animalVisits = visits.visits.filter(v => v.animalID === animalId);

  if (animalVisits.length === 0) {
    return { lastDate: null, nextDate: null };
  }

  const lastVisit = animalVisits.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0];

  const lastDate = new Date(lastVisit.date);
  const nextDate = new Date(lastDate);
  nextDate.setFullYear(nextDate.getFullYear() + 1);

  return { lastDate, nextDate };
}

