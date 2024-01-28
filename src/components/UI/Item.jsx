import { useEffect } from "react";

import Button from "./Button";
import useTime from "../../hooks/use-time";

function Item({ item }) {
  const time = item.time;

  const { formattedTime, inputTime } = useTime();

  useEffect(() => {
    inputTime(time);
  }, [time]);

  const url = item.url;
  const formattedUrl =
    item.url[item.url.length - 1] === "/"
      ? item.url.slice(8, item.url.length - 1)
      : item.url.slice(8, item.url.length);

  return (
    <div className="flex-1 flex flex-col pr-4 last:pr-0 border-r last:border-r-0 border-neutral-80">
      <div className="flex gap-1">
        <p className="small-text text-neutral-70">{item.score} points</p>
        <p className="small-text">-</p>
        <p className="small-text text-neutral-70">{formattedTime}</p>
      </div>
      <a href={item.url} className="flex-auto">
        <h4>{item.title}</h4>
      </a>
      <div className="flex justify-between items-center">
        <p className="button-text text-neutral-70">by {item.by}</p>
        <a href={item.url}>
          <Button className="button-small text-primary-50">
            {formattedUrl}
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Item;
