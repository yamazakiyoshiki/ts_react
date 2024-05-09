import { useAppSelector } from "../store/hooks";

const CounterResult = () => {
  const count = useAppSelector((state) => state.counter.count);
  console.log(count);
  // const state = useCounter();
  return <h3>{count}</h3>;
};

export default CounterResult;
