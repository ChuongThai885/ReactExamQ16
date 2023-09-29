import { useDispatch } from "react-redux";
import {
  decrease,
  increase,
  selectCounterValue,
} from "../../store/counterSlide";
import { useSelector } from "react-redux";

export const Counter = () => {
  const countValue = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase(selectCounterValue));
  };
  const handleDecrease = () => {
    dispatch(decrease(selectCounterValue));
  };

  return (
    <>
      <h1>{countValue}</h1>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button style={{ marginLeft: 10 }} onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </>
  );
};
