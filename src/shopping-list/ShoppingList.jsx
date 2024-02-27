import { useState } from "react";
import "./styles.css";

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const onRemoveItem = (itemToRemove) => {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  };
  return (
    <>
      <h1 className="heading">Shopping List</h1>
      <div className="shopping-list">
        <h2>Items to Buy</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button className="add-button">Add</button>
        </form>
        <ul className="shopping-items">
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

const Item = ({ item, onRemoveItem }) => {
  return (
    <li className="delete-list">
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
};
export default ShoppingList;
