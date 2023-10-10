import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="md:flex items-center my-32">
      <div className="flex-1">
        <img
          data-aos="zoom-in-up"
          className=" md:w-3/4 mx-auto"
          src="https://i.ibb.co/Mp0hxZb/about-fe497610c665332bd701.jpg"
          alt=""
        />
      </div>
          
      <div data-aos="zoom-in-up" className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-5">About Me</h1>
        <p>
          Photography has always been one of my favorite hobbies. When I take
          pictures, its like seeing things in a new perspective literally and
          figuratively. you can go up to a flower and see the texture of the
          petal or put a caterpillar on your finger and see the little hairlike
          things on its body. Thing about the camera and the lens is that it
          lets you see people, places, etc. in a whole new perspective and it
          helps to see things from a different view. From photography, I
          realized that getting a different view of things means you have a more
          open mind to the world. Which is why itss always been my favorite
          hobby.
        </p>
      </div>
    </div>
  );
};

export default About;
