import { countryIsLoading, covidCountry } from "./covid.slice";

export const userCountry = (countryName = "india", byLocation) => {
  return async (dispatch) => {
    const countryCovidDeatil = async () => {
      dispatch(countryIsLoading(true));
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
      dispatch(countryIsLoading(false));
      dispatch(covidCountry(userCountry));
    } catch (err) {
      dispatch(countryIsLoading(false));
      console.log(err);
    }
  };
};
