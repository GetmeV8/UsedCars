import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const TopNav = () => {
  const texts = useMemo(
    () => [
      // "Vehicles at best prices",
      // "Wide range of models",
      // "Click here for more details !",
      "最高価格の車両",
      "幅広いモデル",
      "詳細はこちらをクリック！",
    ],
    []
  );

  const [currentText, setCurrentText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(texts[currentIndex]);
      setCurrentIndex((currentIndex + 1) % texts.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, texts]);

  return (
    <div
      id="sticky-banner"
      className="z-40 flex justify-between  h-8 bg-[#c71523] w-full"
    >
      <div className="flex items-center mx-auto">
        <Link to={"/career"}>
          <p className="flex items-center  font-semibold text-white cursor-pointer">
            <span className="md:text-lg text-sm">{currentText}</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
export default TopNav;
