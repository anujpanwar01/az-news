import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../../store/weather/weather.slice";
import { FullDayNavigation } from "./FullDayNav.styles";

const FullDayNav = ({ navActive, onTodayActive, onWeekActive }) => {
  const weather = useSelector((state) => state.weather);
  console.log(weather);
  const dispatch = useDispatch();
  const celcius = () => dispatch(setUnit("c"));
  const fahrenheit = () => dispatch(setUnit("f"));
  const kelvin = () => dispatch(setUnit("k"));
  return (
    <FullDayNavigation>
      <div className="unit">
        <button onClick={celcius}>°C</button>
        <button onClick={fahrenheit}>°F</button>
        <button onClick={kelvin}>K</button>
      </div>
      <ul>
        <li>
          <button
            className={navActive ? "active" : "non-active"}
            onClick={onTodayActive}
          >
            Today
          </button>
        </li>
        <li>
          <button
            className={!navActive ? "active" : "non-active"}
            onClick={onWeekActive}
          >
            Week
          </button>
        </li>
      </ul>
    </FullDayNavigation>
  );
};
export default FullDayNav;
