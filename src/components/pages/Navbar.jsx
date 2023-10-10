import { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../routers/AuthProvider";
import avater from "../../assets/avater.png";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const navList = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/couple"}>Couple</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
    </>
  );

  const hanleLogout = () => {
    if (user) {
      Swal.fire("You have successfully logged out.");
    }

    logout()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`navbar px-2 md:px-10 top-0 left-0 right-0 border-b border-b-slate-300`}
    >
      <div className="navbar-start">
        <div>
          <Link className="text-xl font-bold" to={"/"}>
            The Moments
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-lg">{navList}</ul>
      </div>

      {user ? (
        <div className="navbar-end flex items-center gap-3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL ? user.photoURL : avater} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content w-60 mt-2 z-[2] -ml-48 border text-white rounded p-6 shadow bg-black bg-opacity-70"
            >
              <img
                className="rounded-full w-16 h-16 mx-auto"
                src={user.photoURL}
                alt=""
              />
              <h1 className="text-center pt-2 pb-6 font-semibold">
                {user.displayName}
              </h1>
              <li className="lg:hidden">{navList}</li>
              <li>
                <Link
                  className="flex items-center gap-1"
                  onClick={hanleLogout}
                  to={"/"}
                >
                  <span>Logout</span>
                  <BiLogOut></BiLogOut>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end flex items-center gap-3">
          <div>
            <div>
              <Link
                onClick={hanleLogout}
                className="bg-[#99C93C] px-4 nav-btn py-2 rounded normal-case"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
