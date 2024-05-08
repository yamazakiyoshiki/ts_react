import React, { useEffect, useState } from "react";

const Practice1 = () => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    isChecked && window.alert("clicked!");
  }, [isChecked]);
  return (
    <>
      <label>
        <input type="checkbox" onClick={() => setIsChecked((prev) => !prev)} />
        click me!
      </label>
    </>
  );
};

export default Practice1;
