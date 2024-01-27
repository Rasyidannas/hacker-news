import { useState, useEffect } from "react";
import moment from "moment";

import Button from "./Button";
import ArrowRightIcon from "../Icons/ArrowRight";
import useTime from "../../hooks/use-time";

function ItemTop({ item, index }) {
  const time = item.time;

  const { formattedTime, inputTime } = useTime();

  useEffect(() => {
    inputTime(time);
  }, [time]);

  return (
    <div className="flex flex-col gap-1 border-neutral-80">
      <div className="text-neutral-70 flex items-center justify-between">
        <h5 className="italic">
          0{index + 1} {item.type}
        </h5>
        <p className="small-text">{formattedTime}</p>
      </div>
      <a href={item.url}>
        <h3>{item.title}</h3>
      </a>
      <div className="flex justify-between">
        <p className="button-text text-neutral-70">by {item.by}</p>
        <a href={item.url}>
          <Button className="button-small text-primary-50" text="Read more">
            <ArrowRightIcon />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default ItemTop;
