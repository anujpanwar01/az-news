import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../../store/weather/weather.slice";
import { FullDayNavigation } from "./FullDayNav.styles";

const FullDayNav = ({ navActive, onTodayActive, onWeekActive }) => {
  const { unit } = useSelector((state) => state.weather);

  const dispatch = useDispatch();
  const celcius = () => dispatch(setUnit("c"));
  const fahrenheit = () => dispatch(setUnit("f"));
  const kelvin = () => dispatch(setUnit("k"));
  return (
    <FullDayNavigation>
      <div className="unit">
        <button onClick={celcius}>
          <span className={unit !== "c" ? "down" : "no-down"}>°C</span>
          <span className={unit === "c" ? "up" : "no-up"}>°C</span>
        </button>
        <button onClick={fahrenheit}>
          <span className={unit !== "f" ? "down" : "no-down"}>°F</span>
          <span className={unit === "f" ? "up" : "no-up"}>°F</span>
        </button>
        <button onClick={kelvin}>
          <span className={unit !== "k" ? "down" : "no-down"}>K</span>
          <span className={unit === "k" ? "up" : "no-up"}>K</span>
        </button>
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
