import React from "react";
import { Link } from "react-router-dom";

const Sticky = () => {
  return (
    <div className="sticky z-[1050] top-0 left-0 right-0 md:flex items-center h-14 justify-between hidden bg-white px-2">
      {/* leftside*/}
      <div className="cursor-pointer text-neutral-950 text-center flex items-center justify-start h-full w-full">
        <Link to="/">
          <div className="flex items-center  h-full w-full">
            <img
              src="/Images/9.png"
              className="px-1"
              style={{ width: "70px", height: "auto", filter: "brightness(1)" }}
              alt="Logo"
            />
            {/* <h3 className="font-semibold text-sm">AUTOALLY</h3> */}
            <h3 className="font-semibold text-sm flex">自動車</h3>
          </div>
        </Link>
      </div>

      {/* Center*/}
      <div className="flex items-center justify-center w-full px-4 ml-32 ">
        <input
          type="text"
          placeholder="検索..."
          className="w-full max-w-md p-2 border rounded-md focus:outline-none focus:border-[#ec443e]"
        />
      </div>

  {/* rightside */}
      <div className="flex items-center justify-end font-semibold w-full text-sm">
        <div className="cursor-pointer z-50 p-3">
          {/* <Link to="/">All Services</Link> */}
          <Link to="/">すべてのサービス</Link>
          
        </div>
        <div className="cursor-pointer z-50 p-3">
          {/* <Link to="/">Auto Parts</Link> */}
          <Link to="/">自動車部品</Link>
        </div>
        <div className="p-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#c71523] z-50 text-white p-1 rounded-md hover:bg-[#4087ba] w-28 justify-center flex items-center gap-2 cursor-pointer">
              {/* Login/Signup */}
              サインアップ
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
