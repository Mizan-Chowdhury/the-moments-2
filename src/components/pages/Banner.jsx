const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/c6pKTXF/heart-529607.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="md:max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              Ready to take you beyond your imagination
            </h1>
            <p className="mb-5">
              With the uniqueness of my concepts and hard working quality, I am
              always a step ahead from others. I take photos so perfectly that
              you will feel the same that you had felt in that very special day
              with your very special one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
