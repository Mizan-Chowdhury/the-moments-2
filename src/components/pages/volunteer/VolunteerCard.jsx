const VolunteerCard = ({ cards }) => {
  const { name, position, image } = cards;
  return (
    <div className="bg-base-100 shadow-lg p-2">
      <figure className="">
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

export default VolunteerCard;
