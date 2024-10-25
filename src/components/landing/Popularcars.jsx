import React from 'react';
import { Link } from 'react-router-dom';

const PopularCars = () => {
  const carModels = [
    ["TOYOTA COROLLA SEDAN", "TOYOTA HIACE VAN", "TOYOTA COROLLA SPACIO", "TOYOTA PROGRES", "TOYOTA SPRINTER SEDAN", "TOYOTA CARINA", "TOYOTA VITZ", "TOYOTA IPSUM"],
    ["TOYOTA RAUM", "TOYOTA RAV4", "TOYOTA HARRIER", "TOYOTA CORONA PREMIO", "TOYOTA HILUX SURF", "TOYOTA NOAH", "NISSAN CARAVAN VAN", "NISSAN ELGRAND"],
    ["NISSAN X-TRAIL", "MITSUBISHI PAJERO IO", "MITSUBISHI PAJERO", "MITSUBISHI CANTER", "HONDA CR-V", "BENZ C-CLASS", "BENZ A-CLASS", "BMW 3 SERIES"],
  ];

  return (
    <div className="container mx-auto my-8 p-4">
      {/* <h2 className="text-xl font-bold mb-2">Popular Japanese Used Cars</h2> */}
      <h2 className="text-xl font-bold mb-2"> 人気のある日本の中古車</h2>
      {/* <p className="mb-4">
        Find your ideal popular Japanese cars from more than 380,000 in stock.
      </p> */}
       <p className="mb-4">
       在庫38万台以上の中から理想の人気日本車を見つけましょう。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {carModels.map((column, index) => (
          <div key={index} className="flex flex-col space-y-1">
            {column.map((model, idx) => (
              <Link
                key={idx}
                to={`/${model.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-[#c71523] hover:underline"
              >
                {model}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
