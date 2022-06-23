import { useEffect, useRef, useState } from "react";
import {
  CovidContainer,
  CovidCurrentDate,
  NewCases,
  NewDeath,
  NewRecovered,
  Form,
} from "./Covid.Page.styles";
import { AiFillWarning, AiOutlineCheckCircle } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FaHourglassEnd } from "react-icons/fa";
import useCroods from "../../hooks/use-croods";
import CovidHistory from "../../components/covid-history/Covid-History";
import { userCountry } from "../../store/covid/covid.action";
import { useDispatch, useSelector } from "react-redux";
import DataStatus from "../../components/status/Data.Status";

const CovidPage = () => {
  const [userTypedCountry, setUserTypedCountry] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  let isUserTypedCountry = !!userTypedCountry;
  const dispatch = useDispatch();
  const {
    userCountryCode: { countryName },
    browserError,
    otherGeolocationError,
    apiError,
  } = useCroods();

  const { covid } = useSelector((state) => state);

  const inputRef = useRef();

  useEffect(() => {
    setIsFetching(true);
    dispatch(
      userCountry((isUserTypedCountry && userTypedCountry) || countryName)
    );
  }, [dispatch, countryName, isUserTypedCountry, userTypedCountry]);

  const countryLocalLang = covid?.country?.Country === "India" ? "hi" : "en";

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredCountry = inputRef.current.value;
    if (!enteredCountry) {
      return;
    }
    // capitalize first character
    const capitalizeCountryName = enteredCountry
      .trim()
      .split(" ")
      .map((letter) => letter[0].toUpperCase().concat(letter.slice(1)))
      .join(" ");

    setUserTypedCountry(capitalizeCountryName);
  };
  let statusContent;

  if (!!browserError) {
    statusContent = (
      <DataStatus
        content={browserError}
        className="error-text"
        status="error-status"
        btnClassName="error-btn"
        fetch={isFetching}
        setIsFetching={setIsFetching}
      >
        <AiFillWarning size={24} />
        {browserError}
      </DataStatus>
    );
  }

  if (!!otherGeolocationError) {
    statusContent = (
      <DataStatus
        content={otherGeolocationError}
        className="error-text"
        status="error-status"
        btnClassName="error-btn"
        fetch={isFetching}
        setIsFetching={setIsFetching}
      >
        <AiFillWarning size={24} className="error-svg" />
      </DataStatus>
    );
  }
  if (!!apiError) {
    statusContent = (
      <DataStatus
        content={apiError}
        className="error-text"
        status="error-status"
        btnClassName="error-btn"
        fetch={isFetching}
        setIsFetching={setIsFetching}
      >
        <AiFillWarning size={24} className="error-svg" />
      </DataStatus>
    );
  }
  if (covid.notification?.status === "pending") {
    statusContent = (
      <DataStatus
        content={covid.notification.message}
        className="pending-text"
        status="pending-status"
        btnClassName="pending-btn"
        fetch={isFetching}
        setIsFetching={setIsFetching}
      >
        <FaHourglassEnd size={24} className="pending-svg" />
      </DataStatus>
    );
  }
  if (covid.notification?.status === "successfull") {
    statusContent = (
      <DataStatus
        content={covid.notification.message}
        className="success-text"
        status="success-status"
        btnClassName="success-btn"
        fetch={isFetching}
        setIsFetching={setIsFetching}
      >
        <AiOutlineCheckCircle size={24} className="success-svg" />
      </DataStatus>
    );
  }
  if (covid.notification?.status === "error") {
    statusContent = (
      <DataStatus
        content={covid.notification.message}
        className="error-text"
        status="error-status"
        btnClassName="error-btn"
        fetch={isFetching}
        setIsFetching={setIsFetching}
      >
        <AiFillWarning size={24} className="error-svg" />
      </DataStatus>
    );
  }
  return (
    <CovidContainer>
      {statusContent}
      <CovidCurrentDate>
        <Form
          className="form"
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
