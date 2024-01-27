import TopList from "./TopList";
import HighlightList from "./HighlightList";
import Button from "../UI/Button";
import { useEffect, useState } from "react";

function Top({ items }) {
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

  console.log(slideNav);

  return (
    <div className="flex gap-6 mt-12">
      {/* Render your loaded highlight items here */}
      <div className="w-1/2 bg-secondary-90 overflow-x-hidden rounded-lg relative">
        <div
          className={`flex h-full transition-all`}
          style={{ transform: `translateX(${slideNav * -100}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col justify-between flex-none w-full p-12"
            >
              <HighlightList item={item} index={i} />
            </div>
          ))}
        </div>
        <div className="absolute bottom-14 right-12 flex">
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
      <div className="flex flex-col w-1/2">
        {items.map((item, i) => (
          <TopList item={item} key={item.id} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Top;
