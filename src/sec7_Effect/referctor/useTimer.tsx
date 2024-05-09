import { useEffect, useLayoutEffect, useState } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunnign] = useState(false);

  useEffect(() => {
    // console.log("init");
    let intervalId = 0;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        // console.log("interval called");
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      window.clearInterval(intervalId);
      // console.log("end");
    };
  }, [isRunning]);

  useEffect(() => {
    // console.log("updated");
    document.title = "counter" + time;
    window.localStorage.setItem("time-key", time.toString());

    return () => {
      // console.log("updated ent");
    };
  }, [time]);

  useLayoutEffect(() => {
    const timeStr = window.localStorage.getItem("time-key");
    if (timeStr !== null) {
      let _time = parseInt(timeStr, 10);
      setTime(_time);
    }
  }, []);

  const toggle = () => {
    setIsRunnign((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
    setIsRunnign(false);
  };

  return {
    isRunning,
    time,
    toggle,
    reset,
  };
};

export default useTimer;
