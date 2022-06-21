import { useEffect, useState } from "react";

const useFetch = (apiUrl) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Something went wrong...");
        const data = await res.json();
        setResponse(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    getData();
  }, [apiUrl]);

  return { isLoading, response, error };
};
export default useFetch;
