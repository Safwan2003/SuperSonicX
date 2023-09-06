import React from 'react'
import '../Stylesheet/Testimonials.css'
import Avtar1 from "../assets/avatar2.jpg";
import Avtar2 from "../assets/avatar2.jpg";
import Avtar3 from "../assets/avatar3.jpg";
import Avtar4 from "../assets/avatar3.jpg";

//import swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles

import "swiper/css";
import 'swiper/css/pagination';

const data= [
  {
  avtar: Avtar1, 
  name: "Tina Snow", 
  review: "Modi alias snimi dolorem aliquam ea eum beatze malores, consectetur praesentium quibusdam, commodi vet porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quast?."

  },

  {
    avtar: Avtar2, 
    name: "Shatta Wale", 
    review: "Modi alias snimi dolorem aliquam ea eum beatze malores, consectetur praesentium quibusdam, commodi vet porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quast?."
  
    },

    {
      avtar: Avtar3, 
      name: "Kwane Despite", 
      review: "Modi alias snimi dolorem aliquam ea eum beatze malores, consectetur praesentium quibusdam, commodi vet porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quast?."
    
      },

      {
        avtar: Avtar4, 
        name: "Nana Ama McBrown", 
        review: "Modi alias snimi dolorem aliquam ea eum beatze malores, consectetur praesentium quibusdam, commodi vet porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quast?."
      
        },

]
const Testimonials = () => {
  return (
    <section className=' my-[10rem] flex lg:flex-row flex-col justify-center items-center lg:justify-between px-44  '>
      <h1 className='text-white  text-6xl font p-5 lg:p-0 lg:-rotate-90 '>Testimonial</h1>
    <div id='testimonials' className='bg-[#1d1d1d] border-4  border-[#00ec00] drop-shadow-2xl w-[35rem]  lg:w-[80rem] flex flex-col justify-center items-center rounded-2xl   '>
 
      <Swiper className="container testimonials_container flex flex-col text-white  justify-center items-center text-center "
        //install the swiper modules
           modules = {[Pagination , Autoplay ]}
           spaceBetween={40}
           slidesPerView={1}
           pagination ={{clickable : true }}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}           >
        {
          data.map(({avtar, name, review}, index) =>{
            return(
        <SwiperSlide key={index} className="testimonial p-5 pt-10 space-y-5">
            <div className="client_avatar flex flex-col justify-center items-center text-center">
              <img src={avtar} className='rounded-full'/>
              </div>
              <h5 className='italic font-thin p-6 text-5xl'>{name}</h5>
              <small className='client_review text-4xl '>{review}</small>
            
        </SwiperSlide>
          )
          })
          }
        
      </Swiper>
    </div> 
    </section>
  )
}

export default Testimonials
