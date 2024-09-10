import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency] || {})) // Ensure fallback to empty object if currency not found
      .catch((err) => console.error("Failed to fetch currency data:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
