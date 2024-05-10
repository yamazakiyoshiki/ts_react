import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from ".";
import { useSelector } from "react-redux";
import { Counter2Dispatch, Counter2State } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useCounter2Dispatch = useDispatch.withTypes<Counter2Dispatch>();
export const useCounter2Selector = useSelector.withTypes<Counter2State>();
