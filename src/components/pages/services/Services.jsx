import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=> setCards(data))
    },[])
    return (
        <div className="my-20 px-2 lg:px-32">
            <div className="text-center mb-10 text-5xl font-bold">
                <h1>Our Wedding Events</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                cards.map(card=> <ServiceCard key={card.id} cards={card}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;