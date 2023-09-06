import React from 'react'
import '../Stylesheet/Services.css'
import Img1 from "../assets/services1.png";
import Img2 from "../assets/services2.jpg";
import Img3 from "../assets/services3.jpg";
import Img4 from "../assets/services4.jpg";
import Img5 from "../assets/services5.jpg";
import Img6 from "../assets/services6.jpg";




const data = [
  {
  id: 1,
  image: Img1,
  title: 'Crypto Currency Dashboard & Financial Visualization',
  
},
{
  id: 2,
  image: Img2,
  title: 'Charts templates & infographics in Figna',
  
},
{
  id: 3,
  image: Img3,
  title: 'Fige dashboard UI kit for date design web apps',
  
},

{
  id: 4,
  image: Img4,
  title: 'Maintaining Tasks and Tracking progress',
  
},

{
  id: 5,
  image: Img5,
  title: 'Charts templates & infographic in Figma',
  
},

{
  id: 6,
  image: Img6,
  title: 'Charts templates & infographic in Figma',
  
},
]
const Services = () => {
  return (
    <div className='my-[10rem] lg:px-[10rem] p-10'>
    <section id='services'>
      <h5 className='text-7xl text-white font-bold font-semibold text-center p-5 my-10'>My <span> Recent Work</span></h5>
      

      <div className="container services_container">
        {
          data.map(({id, image, title}) =>{
            return(
              <article key={id} className="services_item">
          <div className="services_item-image">
                <img src={image} alt={title}  />
          </div>
            <h3 className='text-white text-4xl font text-center '>This is a services item title.</h3>
           
        </article>
            )
          })
        }
      </div>
    </section>

    </div>
  )
}

export default Services