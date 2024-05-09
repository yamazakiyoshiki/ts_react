import CounterResult from "./CounterResult";
import CounterButton from "./CounterButton";
import { add, addAsyncWithStatus, minus } from "../store/modules/counter";
import { useAppSelector } from "../store/hooks";

const Counter = () => {
  const status = useAppSelector((state) => state.counter.status);
  return (
    <>
      <CounterResult />
      <CounterButton payload={2} calcType="+" actionCreator={add} />
      <CounterButton payload={2} calcType="-" actionCreator={minus} />
      <CounterButton
        payload={2}
        calcType="非同期(+)"
        actionCreator={addAsyncWithStatus}
      />
      <h3>{status}</h3>
    </>
  );
};
export default Counter;
