import { useEffect, useState } from "react";

const useCroods = () => {
  const api = process.env.REACT_APP_GEONAMES_API;
  const [latitude, setLatitude] = useState(null);
  const [geoError, setGeoError] = useState("");
  const [longitude, setLongitude] = useState(null);
  const [userCountryCode, setUserCountryCode] = useState("");

  const [isCroodsLoading, setIsCroodsLoading] = useState(false);

  const [apiError, setApiError] = useState("");

  const errorHandlerGeolocation = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setGeoError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setGeoError("Location information is unavailable.");
        break;

      case error.TIMEOUT:
        setGeoError("The request to get user location timed out.");
        break;
      default:
        setGeoError("An unknown error occurred.");
        break;
    }
  };

  useEffect(() => {
    setIsCroodsLoading(true);
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        function (location) {
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
        },
        (error) => {
          setIsCroodsLoading(false);
          errorHandlerGeolocation(error);
        }
      );
    } else {
      setIsCroodsLoading(false);
      setGeoError("Geolocation is not supported by this browser.");
      return;
    }
    if (latitude && longitude) {
      fetch(
        `http://api.geonames.org/findNearbyJSON?lat=${latitude}&lng=${longitude}&username=${api}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUserCountryCode(data.geonames[0]);
          setIsCroodsLoading(false);
        })
        .catch((err) => {
          setApiError(err.message);
          setIsCroodsLoading(false);
        });
    }
  }, [latitude, longitude, api]);

  return {
    longitude,
    geoError,
    latitude,
    userCountryCode,
    apiError,
    isCroodsLoading,
  };
};
export default useCroods;
