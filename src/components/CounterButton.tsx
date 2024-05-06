import { useDispatch } from "../sec6_hooks/context/CounterContext";

type CounterButtonProps = {
  calcType: string;
  step: number;
};

const CounterButton = ({ calcType, step }: CounterButtonProps) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch({ type: calcType, step });
  };
  return (
    <>
      <button onClick={clickHandler}>
        {calcType}
        {step}
      </button>
    </>
  );
};

export default CounterButton;
