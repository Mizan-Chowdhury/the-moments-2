import Navbar from "./Navbar";

const Couple = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-10">
        <h1 className="text-center text-5xl font-bold">Groom and Bride</h1>
        <div className="lg:flex lg:px-32 gap-20 my-10">
          <div className="">
            <img
              className="rounded-lg"
              src="https://i.ibb.co/chfDby3/avatar-17.jpg"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-2xl">
              Martin Smith
            </h1>
          </div>
          <div className="mt-10 md:mt-0">
            <img
              className="rounded-lg"
              src="https://i.ibb.co/Vg6LDgk/avatar-21.jpg"
              alt=""
            />
            <h1 className="text-center font-bold my-2 text-2xl">
              Suntina Nelson
            </h1>
          </div>
        </div>
        <div className="text-center lg:px-32 font-semibold">
          <p>
            Martin Smith and Suntina Nelson told their families that they
            believed marriage was a sacred commitment between two people who
            loved each other deeply and were ready to face all of life's
            challenges together. They also expressed their desire to build a
            strong foundation of trust, respect, and open communication before
            getting married.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Couple;
