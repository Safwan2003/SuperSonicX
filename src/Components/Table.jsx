import React, { useEffect } from 'react';
import '../Stylesheet/Table.css';
import '../Stylesheet/Layout.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from 'vanilla-tilt';
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const Table = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card-tilt"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='body mt-8 pt-8'>
      <div className='middle' >
      

        <div className='digital'>
          <h1 className='text-center text-4xl p-6  lg:text-5xl ' data-aos="fade-down">We are a new digital product<br></br> development agency</h1>
        </div>
        <h3 className='text-4xl text-center p-[5rem] mt-[5rem] tracking-[1rem]  lg:text-5xl ' data-aos="fade-up">BEST FEATURES</h3>

        <section className='flex flex-col  lg:flex-row items-center justify-center '>
          <div data-aos="fade-right" className="card-tilt ">
            <div data-aos="fade-right" className="card-image"><img src={pic1} /></div>
            <div data-aos="fade-right" className="card-text">
              <span data-aos="fade-right" className="date">4 days ago</span>
              <h2>Post One</h2>
              <p className='pt-5'>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
          </div>

          <div data-aos="fade-up" className="card-tilt card-2 rgb">
            <div data-aos="fade-up" className="card-image"><img src={pic2} /></div>
            <div data-aos="fade-up" className="card-text">
              <span data-aos="fade-up" className="date">4 days ago</span>
              <h2>Post One</h2>
              <p className='pt-5'>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
          </div>

          <div  className="card-tilt">
            <div data-aos="fade-left" className="card-image"><img src={pic3} /></div>
            <div  className="card-text">
              <span data-aos="fade-left" className="date">4 days ago</span>
              <h2>Post One</h2>
              <p className='pt-5'>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Table;
