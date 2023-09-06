import { Outlet, Link } from "react-router-dom";
import './Stylesheet/Layout.css';
import { useState } from "react";
import Footer from '../src/Components/Footer.jsx'

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">

      <div className=' flex justify-between lg:justify-center  p-4 py-20 body '>
     
    
        <h3 data-aos="fade-down" className=' text-4xl px-10 lg:absolute left-5' id='#home'>              <Link  to="/">
Supersonic Themes </Link></h3> 
       
       
        <button
          className="lg:hidden text-3xl focus:outline-none absolute top-15 right-5"
          onClick={toggleMenu}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav className={`mt-4 lg:mt-0 lg:ml-8 ${menuOpen ? "" : "hidden"} lg:flex lg:space-x-8 `}>
          <ul className="lg:flex lg:space-x-10 text-3xl lg:justify-center">
            <li>
              <Link  to="/">Home <span></span></Link>
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
            <li>
            
            
        
        <div className='center lg:absolute right-8 top-12 lg:hidden'>
        <div className='outer Button'>
        <div className="mt-4 lg:mt-0">
          <button className="header-btn text-2xl bg-blue-200 p-1 rounded-lg px-3 ">
         
                           <Link to="/Contact">LET'S TALK</Link>
         
          </button>
        </div>
        <span></span>
        

        </div>
        </div>
            </li>
          </ul>
        
        <div className='center lg:absolute right-8 top-12 max-md:hidden'>
        <div className='outer Button'>
        <div className="mt-4 lg:mt-0">
        <button className="header-btn text-2xl bg-blue-200 p-1 rounded-lg px-3 ">
                         <Link to="/Contact">LET'S TALK</Link>
        </button>
        </div>
        <span></span>
        <span></span>

        </div>
        </div>
        </nav>
      </div>

      <Outlet />
     <Footer/>
    </div>



        


  )
};

export default Layout;
