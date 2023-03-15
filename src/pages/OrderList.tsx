// Project files
import ItemOrder from "../components/ItemOrder";
import iOrder from "../interfaces/iOrder";

interface iProps {
  items: iOrder[];
}

export default function OrderList({ items }: iProps) {
  // Components
  const Items = items.map((item) => <ItemOrder key={item.id} item={item} />);

  return (
    <div>
      <h1>Hello user, here your packages</h1>
      <div className="grid">{Items}</div>
    </div>
  );
}
