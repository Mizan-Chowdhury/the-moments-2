import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../routers/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(typeof name, image);

    if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
      setError(
        "Error: Your password needs to be longer and contain a capital letter and special character."
      );
    } else {
      setError("");

      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          Swal.fire("Congratulations!", "You have successfully registered.");
          updateUserProfile(name, image)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <div className="card max-w-md mx-auto shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md font-bold">Full name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md font-bold">Photo URL</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="Your photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-600">{error}</p>
            <div className="form-control">
              <button className="btn bg-[#99C93C]">Register</button>
            </div>
            <p className=" text-center">
              Already have an account? Please{" "}
              <Link
                className="text-[#99C93C] font-bold underline"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
