import { setNotification, covidCountry } from "./covid.slice";

export const userCountry = (countryName = "india") => {
  return async (dispatch) => {
    const countryCovidDeatil = async () => {
      dispatch(
        setNotification({
          status: "pending",
          title: "Fetching",
          message: "Data is fetching...",
        })
      );
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();

      const userLocationCountry = data?.Countries.filter(
        (country) => country.Country === countryName
      );
      const countryObj = userLocationCountry[0];

      // get other info of it country
      if (countryObj?.CountryCode) {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await res.json();

        const countryDetails = data.filter((country) => {
          return country.name.common === countryName;
        });

        // set new object property to exist object
        countryObj.population = countryDetails[0]?.population;
        countryObj.flag = countryDetails[0]?.flags?.svg;
      }
      return countryObj;
    };

    try {
      const userCountry = await countryCovidDeatil();
      if (userCountry)
        dispatch(
          setNotification({
            status: "successfull",
            title: "Success",
            message: "Data fetched successfully",
          })
        );
      else
        dispatch(
          setNotification({
            status: "error",
            title: "Error",
            message: "Country Not found...",
          })
        );
      dispatch(covidCountry(userCountry));
    } catch (err) {
      dispatch(
        setNotification({
          status: "error",
          title: "Error",
          message: "Somthing went wrong...",
        })
      );
    }
  };
};
