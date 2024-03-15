import { Link } from "react-router-dom";

const Navbar = () => {

  
  const navOptions = (
    <>
      
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <Link to="/service">Services</Link>
      </li>
      <li>
        <Link to="/skill">Skill</Link>
      </li>
      <li>
        <Link to="/project">Project</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-[#071028] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#071028] rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Portfolio</a>
      </div>
      <div className="navbar-center ">
        
      </div>
      <div className="navbar-end hidden lg:flex ">
      <ul className="menu menu-horizontal px-1 transition">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
