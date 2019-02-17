import { useState, useEffect } from "react";
const controller = new AbortController();
const signal = controller.signal;
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url, {signal});
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
    return () => {
      controller.abort();
    };
  },[]);
  return [data, loading];
}
export { useFetch };