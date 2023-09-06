import React from 'react';
import '../Stylesheet/Pyramid.css'; // Import your CSS file with styles if you have one

const Pyramid = () => {
  return (
    <section className='pyramid-section'>
    <div className="pyramid">
      <div className="glow"></div>
      <div>
        {[0, 1, 2, 3].map((index) => (
          <span key={index} style={{ '--i': index }}></span>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Pyramid;
