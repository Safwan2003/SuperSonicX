import React from 'react'
import MyCarousel from '../Components/MyCarousel';
import Table from '../Components/Table';
import Ourservices from '../Components/Ourservices';
import Image from '../Components/ImageCarousel';
import Textslider from '../Components/Textslider';
import Testimonials from '../Components/Testimonials';
import Ceo from '../Components/Ceo';

const Home = () => {
  return (
    <div className=''>
        <MyCarousel/>
        < Textslider/>
        <Table/>
        <Image/>
        <Ceo/>
        <Ourservices/>
        <Testimonials/>
        
    </div>
  )
}

export default Home