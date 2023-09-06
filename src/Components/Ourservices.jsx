import React from 'react'
import '../Stylesheet/Ourservices.css'
import CubeSlider from './CubeSlider'
const Ourservices = () => {
  return (
    <div className='lg:flex lg:flex-wrap lg:justify-between  items-center lg:px-[20rem] mt-[20rem] Our-service '>
    <div className='text-white  text-4xl '>
        <div className='text-center   lg:text-start space-y-10'> 
        <h3 >BEST EXPERIENCE</h3>
        <h1 className='text-7xl text-[#00ec00] font-bold service-heading '>Our Services</h1>
<p >Our area of practice is quite wide: design,<br></br>graphics, branding, development.</p>
</div>
</div>

  <CubeSlider/>
</div>


  )
}

export default Ourservices