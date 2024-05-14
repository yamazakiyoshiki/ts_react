import React, { Suspense, lazy, startTransition, useState } from "react";

const LazyComponentA = lazy(() => import("../referctor/ComponentA"));
const LazyComponentB = lazy(() => import("../referctor/ComponentB"));

const Example4 = () => {
  const [compA, setCompA] = useState(true);
  return (
    <>
      <button
        onClick={() =>
          startTransition(() => {
            setCompA((prev) => !prev);
          })
        }
      >
        ComponentA
      </button>
      <Suspense fallback={<div>Loading!!!!!</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example4;
