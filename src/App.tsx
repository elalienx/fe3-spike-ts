// Node modules
import { useEffect, useState } from "react";

// Project files
import { eFetchStatus } from "./interfaces/eFetchStatus";
import iOrder from "./interfaces/iOrder";
import OrderList from "./pages/OrderList";

export default function App() {
  // Local state
  const [items, setItems] = useState(Array<iOrder>());
  const [status, setStatus] = useState(eFetchStatus.loading);

  // Properties
  const endpoint: string =
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  useEffect(() => {
    loadData(endpoint);
  }, []);

  async function loadData(url: string) {
    try {
      const response = await fetch(url);
      const json = await response.json();

      setItems(json);
      setStatus(eFetchStatus.ready);
    } catch {
      setStatus(eFetchStatus.error);
    }
  }

  return (
    <div>
      {status === eFetchStatus.loading && <p>⏲ Loading...</p>}
      {status === eFetchStatus.ready && <OrderList items={items} />}
      {status === eFetchStatus.error && <p>❌ Can't load data</p>}
    </div>
  );
}
