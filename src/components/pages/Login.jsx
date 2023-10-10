import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../routers/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import Navbar from "./Navbar";


const Login = () => {
    const { googleSingIn, singInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    singInUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire("Congratulations!", "You have successfully logged.");

        navigate(location?.state? location.state : '/')

      })
      .catch((err) => {
        console.log(err)
        setError(err.message)
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleSingIn()
      .then((res) => {
        console.log(res.user);
        Swal.fire("Congratulations!", "You have successfully logged.");
      })
      .catch((err) => {
        setError(err);
      });
  };
    return (
        <div>
            <Navbar></Navbar>
            <div className="card max-w-md mx-auto shadow-2xl bg-base-100 mt-10">
            <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
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
              <div className="form-control mt-6">
                <button className="btn bg-[#99C93C]">Login</button>
              </div>
              <p className="border-b-2 pb-5 text-center">
                Do not have an account? Please{" "}
                <Link
                  className="text-[#99C93C] font-bold underline"
                  to={"/register"}
                >
                  Register
                </Link>
              </p>

              <a onClick={handleGoogleLogin} className="btn mt-5" href="">
                <FaGoogle></FaGoogle>
                Login With Google
              </a>
            </form>
          </div>
        </div>
    );
};

export default Login;