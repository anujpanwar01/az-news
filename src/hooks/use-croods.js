import { useEffect, useState } from "react";

let longitude = 0;
let latitude = 0;

const useCroods = () => {
  const [userCountryCode, setUserCountryCode] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(function (location) {
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;
    });

    if (latitude !== 0 && longitude !== 0) {
      fetch(
        `http://api.geonames.org/findNearbyJSON?lat=${latitude}&lng=${longitude}&username=anujpanwar`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserCountryCode(data.geonames[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [latitude, longitude]);

  return { longitude, latitude, userCountryCode };
};
export default useCroods;
