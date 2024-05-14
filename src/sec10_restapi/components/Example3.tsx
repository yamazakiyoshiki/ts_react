import React from "react";
// import { add } from "../referctor/add";

const Example3 = () => {
  const dynamicImport = async () => {
    const module = await import("../referctor/add");
    console.log(module);
  };
  dynamicImport();
  return <div>ダイナミックインポート</div>;
};

export default Example3;
