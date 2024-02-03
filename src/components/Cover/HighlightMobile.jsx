import TopList from "./TopList";
import SliderList from "./SliderList";
import Button from "../UI/Button";
import { useEffect, useState } from "react";

function HighlightMobile({ items, className }) {
  const [slideNav, setSildeNav] = useState(0);

  const slideNavHandler = (index) => {
    setSildeNav(index);
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSildeNav((prevSlideNav) => (prevSlideNav + 1) % 5);
  //   }, 8000);

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [slideNav]);

  return (
    <div className="flex flex-col gap-6 mt-12 md:hidden md:flex-row">
      {/* Render your loaded highlight items here */}
      <div className="relative w-full overflow-x-hidden rounded-lg md:w-2/3 bg-secondary-90">
        <div
          className={`flex h-full transition-all`}
          style={{
            transform: `translateX(${slideNav * -100}%)`,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            overflowX: "scroll",
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col justify-between flex-none w-full p-12"
              style={{ scrollSnapAlign: "start" }}
            >
              <SliderList item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
      {/* Render your loaded items here */}
      <div className="flex flex-col w-full md:w-1/2">
        {items.map((item, i) => (
          <TopList item={item} key={item.id} index={i} />
        ))}
      </div>
    </div>
  );
}

export default HighlightMobile;
