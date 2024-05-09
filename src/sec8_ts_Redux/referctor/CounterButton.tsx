import { useAppDispatch } from "../store/hooks";

type CounterButtonProps = {
  calcType: string;
  payload: number;
  actionCreator: Function;
};

const CounterButton = ({
  calcType,
  payload,
  actionCreator,
}: CounterButtonProps) => {
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();
  const clickHandler = () => {
    // const action = calcType === "+" ? add(payload) : minus(payload);
    dispatch(actionCreator(payload));
  };
  return (
    <>
      <button onClick={clickHandler}>
        {calcType}
        {payload}
      </button>
    </>
  );
};

export default CounterButton;
