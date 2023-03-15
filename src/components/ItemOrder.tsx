/**
 * Typescript is saying:
 * Is item a string?, a number? an array, an object?, a date?
 */

import iOrder from "../interfaces/iOrder";

interface iProps {
  item: iOrder;
}

export default function ItemOrder({ item }: iProps) {
  return (
    <article>
      <h3>{item.sender}</h3>
      <p>{item.status}</p>
    </article>
  );
}
