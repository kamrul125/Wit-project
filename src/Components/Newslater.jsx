import React from 'react';
import Newslaterimg from '../assets/images/Newslaterimg.png';
import Mestonix from '../assets/images/Mestonix.png';

const Newslater = () => {
  return (
    <div>
      <section className="bg-[#F1F0FF] py-10">
      <div>
            <img src={Newslaterimg} alt="Newslater" className="w-full" />
          </div>
           <div className="flex justify-center mt-6">
            <img src={Mestonix} alt="Mestonix" className="" />
          </div>
      </section>
    </div>
  );
};

export default Newslater;
