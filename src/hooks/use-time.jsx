import { useState, useCallback } from "react";
import moment from "moment";

const useTime = () => {
  const [formattedTime, setFormattedTime] = useState("");

  const inputTime = useCallback((time) => {
    const timeMiliseconds = time * 1000;

    setFormattedTime(moment(timeMiliseconds).fromNow());
  }, []);

  return {
    formattedTime,
    inputTime,
  };
};

export default useTime;
