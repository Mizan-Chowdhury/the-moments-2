import { Link } from "react-router-dom";

const ServiceCard = ({ cards }) => {
  const { id, image, title, description, price } = cards;
  return (
    <div>
      <div className="bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="p-5 space-y-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {description.length > 140 ? (
            <p>{description.slice(0, 140)}...</p>
          ) : (
            <p>{description}</p>
          )}
          <div className="flex justify-between items-center">
            <Link to={`/details/${id}`} className="text-[#FF214F] font-medium">
              Read More
            </Link>
            <p className="text-black">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
