import { useEffect, useState } from "react";

const useCroods = () => {
  const api = process.env.REACT_APP_GEONAMES_API;
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [userCountryCode, setUserCountryCode] = useState("");
  const [browserError, setBrowserError] = useState("");
  const [otherGeolocationError, setOtherGeolocationError] = useState("");

  const [apiError, setApiError] = useState("");

  const errorHandlerGeolocation = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setOtherGeolocationError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setOtherGeolocationError("Location information is unavailable.");
        break;

      case error.TIMEOUT:
        setOtherGeolocationError("The request to get user location timed out.");
        break;
      default:
        setOtherGeolocationError("An unknown error occurred.");
        break;
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(function (location) {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      }, errorHandlerGeolocation);
    } else {
      setBrowserError("Geolocation is not supported by this browser.");

      return;
    }
    if (latitude && longitude) {
      fetch(
        `http://api.geonames.org/findNearbyJSON?lat=${latitude}&lng=${longitude}&username=${api}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUserCountryCode(data.geonames[0]);
        })
        .catch((err) => {
          setApiError(err.message);
        });
    }
  }, [latitude, longitude, api]);

  return {
    longitude,
    latitude,
    userCountryCode,
    browserError,
    apiError,
    otherGeolocationError,
  };
};
export default useCroods;
