import React from 'react'
import '../Stylesheet/About.css';
import excellence from '../assets/excellence.png'
import time from '../assets/clock.png'
import responsive from '../assets/responsive.png'
import perfection from '../assets/ok.png'
import convenient from '../assets/24-hours.png'
import teamwork from '../assets/support.png'
const About = () => {
  return (
    <div>

<div>
      <section className="about" id="about">
        <h2 className="text-7xl p-10  text-center font-semibold">
          About<span>Us</span>
          
        </h2>
        


<div className='grid lg:grid-cols-3 gap-10'>

  <div className='w-[25rem] h-[25rem] border-4  hover:border-[#00ec00]  hover:drop-shadow-2xl	  space-y-5 flex flex-col justify-center items-center text-center rounded-3xl'>
    <img src={excellence} className='w-[10rem] h-[10rem]'/>
    <div className='text-4xl font-bold font'>Excellence</div>
    <div className='text-2xl font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div> 
       </div>




       <div className='w-[25rem] h-[25rem] border-4  hover:border-[#00ec00]  hover:drop-shadow-2xl	  space-y-5 flex flex-col justify-center items-center text-center rounded-3xl'>
    <img src={time} className='w-[10rem] h-[10rem]'/>
    <div className='text-4xl font-bold font'>On Time</div>
    <div className='text-2xl font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div> 
       </div>



       <div className='w-[25rem] h-[25rem] border-4  hover:border-[#00ec00]  hover:drop-shadow-2xl	  space-y-5 flex flex-col justify-center items-center text-center rounded-3xl'>
    <img src={teamwork} className='w-[10rem] h-[10rem]'/>
    <div className='text-4xl font-bold font'>Team Work</div>
    <div className='text-2xl font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div> 
       </div>




       <div className='w-[25rem] h-[25rem] border-4  hover:border-[#00ec00]  hover:drop-shadow-2xl	  space-y-5 flex flex-col justify-center items-center text-center rounded-3xl'>
    <img src={convenient} className='w-[10rem] h-[10rem]'/>
    <div className='text-4xl font-bold font'>Convenient</div>
    <div className='text-2xl font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div> 
       </div>



       <div className='w-[25rem] h-[25rem] border-4  hover:border-[#00ec00]  hover:drop-shadow-2xl	  space-y-5 flex flex-col justify-center items-center text-center rounded-3xl'>
    <img src={perfection} className='w-[10rem] h-[10rem]'/>
    <div className='text-4xl font-bold font'>Perfection</div>
    <div className='text-2xl font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div> 
       </div>



       <div className='w-[25rem] h-[25rem] border-4  hover:border-[#00ec00]  hover:drop-shadow-2xl	  space-y-5 flex flex-col justify-center items-center text-center rounded-3xl'>
    <img src={responsive} className='w-[10rem] h-[10rem]'/>
    <div className='text-4xl font-bold font'>Responsive</div>
    <div className='text-2xl font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div> 
       </div>





</div>

























      </section>

      <section className="skills text-center" id="skills">
        <h2 className="text-7xl p-10 lg:pl-[15rem] text-center font-semibold text-white">
          Our <span>Skills</span>
          <span className="animate scroll" style={{ '--i': 1 }}></span>
        </h2>
        <div className="skills-row">
          <div className="skills-column">
           
            <div className="skills-box lg:px-[10rem]">
              <div className="skills-content">
                <div className="progress">
                  <h3>HTML<span>90%</span></h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>CSS<span>80%</span></h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>JavaScript<span>65%</span></h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>Python<span>70%</span></h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
              <span className="animate scroll" style={{ '--i': 3 }}></span>
            </div>
          </div>
          {/* Other content within the skills-row */}
        </div>
      </section>
    </div>

    </div>
  )
}

export default About