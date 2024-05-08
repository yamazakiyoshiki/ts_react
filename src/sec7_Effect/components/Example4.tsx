import React, { useEffect, useLayoutEffect, useState } from "react";
import Random from "../referctor/Radom";

const Example4 = () => {
  const [isDisp, setIsDisp] = useState(true);
  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>トグル</button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("init");
    let intervalId = 0;
    intervalId = window.setInterval(() => {
      console.log("interval called");
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
      console.log("end");
    };
  }, []);

  useEffect(() => {
    console.log("updated");
    document.title = "counter" + time;
    window.localStorage.setItem("time-key", time.toString());

    return () => {
      console.log("updated ent");
    };
  }, [time]);

  useLayoutEffect(() => {
    const timeStr = window.localStorage.getItem("time-key");
    if (timeStr !== null) {
      let _time = parseInt(timeStr, 10);
      setTime(_time);
    }
  }, []);

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <Random />
    </>
  );
};

export default Example4;
