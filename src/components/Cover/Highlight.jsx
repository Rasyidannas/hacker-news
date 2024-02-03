import TopList from "./TopList";
import SliderList from "./SliderList";
import Button from "../UI/Button";
import { useEffect, useState } from "react";

function Highlight({ items }) {
  const [slideNav, setSildeNav] = useState(0);

  const slideNavHandler = (index) => {
    setSildeNav(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSildeNav((prevSlideNav) => (prevSlideNav + 1) % 5);
    }, 8000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slideNav]);

  return (
    <div className="flex-col hidden gap-6 mt-12 md:flex md:flex-row">
      {/* Render your loaded highlight items here */}
      <div className="relative w-full overflow-x-hidden rounded-lg md:w-2/3 bg-secondary-90">
        <div
          className={`flex h-full transition-all`}
          style={{ transform: `translateX(${slideNav * -100}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col justify-between flex-none w-full p-12"
            >
              <SliderList item={item} index={i} />
            </div>
          ))}
        </div>
        <div className="absolute flex bottom-32 sm:bottom-14 right-12">
          {items.map((item, i) => (
            <Button
              key={item.id}
              className="px-1 py-4"
              onClick={slideNavHandler.bind(null, i)}
            >
              <span
                className={`w-6 h-1 bg-neutral-70 ${
                  slideNav === i && "!bg-primary-50"
                }`}
              ></span>
            </Button>
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

export default Highlight;
