// import React from "react";

// const Banner = () => {
//   return (
//     <div className="relative">
//       <div className="relative h-[400px] w-full overflow-hidden shadow-2xl">
//         <img
//           src="/Images/car8.jpg"
//           className="h-full w-full object-cover"
//           alt=""
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-75"></div>
//       </div>
//       <div className="absolute inset-0 flex flex-col gap-2 items-center text-center text-white justify-center">
//         <h1 className="md:text-4xl text-2xl font-semibold  text-center uppercase">
//          Get anything related to Automobiles
//         </h1>
//         <h3>We Sell Automobiles Globally</h3>
//       </div>
//     </div>
//   );
// };

// export default Banner;


import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <div className="relative h-[400px] w-full overflow-hidden shadow-2xl">
        <img
          src="/Images/car8.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>
      <div className="absolute inset-0 flex flex-col gap-2 items-center text-center text-white justify-center">
        <h1 className="md:text-4xl text-2xl font-semibold text-center uppercase">
          自動車関連の商品を何でも手に入れよう
        </h1>
        <h3>世界中で自動車を販売しています</h3>
      </div>
    </div>
  );
};

export default Banner;