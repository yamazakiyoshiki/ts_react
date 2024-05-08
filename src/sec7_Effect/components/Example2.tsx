import React, { useEffect, useState } from "react";

const Example2 = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("useEffect is called");
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("updated");
    document.title = "counter" + time;
    window.localStorage.setItem("time-key", String(time));
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example2;
