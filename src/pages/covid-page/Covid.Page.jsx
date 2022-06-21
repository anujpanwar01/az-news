import { useEffect, useRef, useState } from "react";
import {
  CovidContainer,
  CovidCurrentDate,
  NewCases,
  NewDeath,
  NewRecovered,
  Form,
} from "./Covid.Page.styles";
import { BiSearchAlt } from "react-icons/bi";
import useCroods from "../../hooks/use-croods";
import CovidHistory from "../../components/covid-history/Covid-History";
import { userCountry } from "../../store/covid/covid.action";
import { useDispatch, useSelector } from "react-redux";

const CovidPage = () => {
  const [userTypedCountry, setUserTypedCountry] = useState("");
  let isUserTypedCountry = !!userTypedCountry;
  const dispatch = useDispatch();
  const {
    userCountryCode: { countryName },
  } = useCroods();

  const { covid } = useSelector((state) => state);
  const inputRef = useRef();

  useEffect(() => {
    dispatch(
      userCountry((isUserTypedCountry && userTypedCountry) || countryName)
    );
  }, [dispatch, countryName, isUserTypedCountry, userTypedCountry]);

  const countryLocalLang = covid?.country?.Country === "India" ? "hi" : "en";

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredCountry = inputRef.current.value;

    // capitalize first character
    const capitalizeCountryName = enteredCountry
      .trim()
      .split(" ")
      .map((letter) => letter[0].toUpperCase().concat(letter.slice(1)))
      .join(" ");

    setUserTypedCountry(capitalizeCountryName);
  };

  return (
    <CovidContainer>
      <CovidCurrentDate>
        <Form
          labelFor="search"
          id="search"
          type="search"
          placeholder="Search Any country ..."
          ref={inputRef}
          submitHandler={submitFormHandler}
        >
          <BiSearchAlt size={24} />
        </Form>

        <h3>{covid?.country?.Country || " Country"}</h3>
        <NewCases>
          <h4>New Cases</h4>
          <p>
            {covid?.country?.NewConfirmed.toLocaleString(countryLocalLang) || 0}
          </p>
        </NewCases>
        <NewDeath>
          <h4>New Deaths</h4>
          <p>
            {covid?.country?.NewDeaths.toLocaleString(countryLocalLang) || 0}
          </p>
        </NewDeath>
        <NewRecovered>
          <h4>New Recovered</h4>
          <p>{covid?.country?.NewRecovered || 0}</p>
        </NewRecovered>
      </CovidCurrentDate>
      <CovidHistory data={covid?.country} lang={countryLocalLang} />
    </CovidContainer>
  );
};
export default CovidPage;
