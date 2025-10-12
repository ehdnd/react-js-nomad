import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    const response = await fetch(
      "https://api.coinpaprika.com/v1/tickers?limit=10"
    );
    const json = await response.json();
    setCoins(json);

    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((val) => (
          <li key={val.id}>
            {val.name} ({val.symbol}): {val.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
