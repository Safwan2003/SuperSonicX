import { Outlet, Link } from "react-router-dom";
import './Stylesheet/Layout.css';
import { useState } from "react";
import Footer from '../src/Components/Footer.jsx';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      <div className='flex flex-col lg:flex-row justify-between p-4 py-20 body'>
        <h3 data-aos="fade-down" className='text-4xl px-4 lg:px-10 lg:absolute left-0 lg:left-5' id='#home'>
          <Link to="/">Supersonic Themes</Link>
        </h3>
        <button
          className="lg:hidden text-3xl focus:outline-none absolute top-15 right-5"
          onClick={toggleMenu}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav className={`mt-4 lg:mt-0 ${menuOpen ? "" : "hidden"} lg:flex lg:space-x-8 lg:justify-center`}>
          <ul className="lg:flex lg:space-x-10 text-3xl">
            <li>
              <Link to="/">Home <span></span></Link>
            </li>
            <li>
              <Link to="/about">About<span></span></Link>
            </li>
            <li>
              <Link to="/services">Services<span></span></Link>
            </li>
            <li>
              <Link to="/Contact">Contact <span></span></Link>
            </li>
          </ul>
        </nav>
        <div className='mt-4 lg:mt-0 flex lg:absolute right-0 lg:right-8'>
          <div className="header-btn text-2xl bg-blue-200 p-1 rounded-lg px-3">
            <Link to="/Contact">LET'S TALK</Link>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
