import { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";

const Volunteer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/volunteer.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="px-4 lg:px-32 py-32 bg-[#F9F9F8]">
      <div className="text-center mb-10 text-5xl font-bold">
        <h1>Introduse Our Volunteers</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {cards.map((card) => (
          <VolunteerCard key={card.id} cards={card}></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
