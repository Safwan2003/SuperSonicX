import React, { useState, useEffect } from 'react';
import '../Stylesheet/ImageCarousel.css'; // Make sure to import your CSS file
import team from '../assets/img-team.jpg';

const ImageCarousel = () => {
  const [radius, setRadius] = useState(240);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotateSpeed, setRotateSpeed] = useState(-60);
  const [imgWidth] = useState(160);
  const [imgHeight] = useState(190);
  let tX = 0;
  let tY = 10;

  useEffect(() => {
    setTimeout(() => init(), 1000);
  }, []);

  useEffect(() => {
    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      const ospin = document.getElementById('spin-container');
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }
  }, [autoRotate, rotateSpeed]);

  const init = (delayTime) => {
    const aEle = [...document.querySelectorAll('#spin-container img')];
    const ospin = document.getElementById('spin-container');

    ospin.style.width = `${imgWidth}px`;
    ospin.style.height = `${imgHeight}px`;

    for (let i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
      aEle[i].style.transition = `transform 1s`;
      aEle[i].style.transitionDelay = `${delayTime || (aEle.length - 1) / 4}s`;
    }
  };

  const applyTransform = (obj) => {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
  };

  const playSpin = (yes) => {
    const ospin = document.getElementById('spin-container');
    ospin.style.animationPlayState = yes ? 'running' : 'paused';
  };

  document.onmousewheel = (e) => {
    e = e || window.Event;
    const d = e.wheelDelta / 20 || -e.detail;
    setRadius(radius + d);
    init(1);
  };
  return (
    <div className='mt-52 font'>
      <div id='drag-container'>
        <div id='spin-container'>
          <div className='w-[20rem] h-[20rem] text-[5rem] text-white'> Meet Our Team</div>
          <img src={team} className='w-full rounded-t-lg' alt='Team' />
          <img src={team} className='w-full rounded-t-lg' alt='Team' />
          <img src={team} className='w-full rounded-t-lg' alt='Team' />
          <img src={team} className='w-full rounded-t-lg' alt='Team' />
          <img src={team} className='w-full rounded-t-lg' alt='Team' />
          <img src={team} className='w-full rounded-t-lg' alt='Team' />
        </div>
        <div id='ground'></div>
      </div>
    </div>
  );
};

export default ImageCarousel;
