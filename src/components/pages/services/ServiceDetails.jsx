import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar";

const ServiceDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const cardDetails = data.find((card) => id === card.id);
  const { image, title, description, price } = cardDetails;
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex justify-center">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="md:max-w-md rounded-lg shadow-2xl" />
          <div className="mx-4">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <button className="bg-[#99C93C] md:text-lg p-2 md:px-6 md:py-4 rounded-md font-bold">
              Booking Now ${price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
