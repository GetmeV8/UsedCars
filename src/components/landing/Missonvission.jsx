import React from 'react'
import Misson from './Misson';
import Vision from './Vision';

const Missonvission = () => {
  return (
    <>
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <Misson/>
            <Vision/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Missonvission
