import React, { useState } from "react";

const AddItem = () => {
  const [items, setItems] = useState(["Item 1"]);
  function handleAddItem() {
    const newItem = `Item ${items.length + 1}`;
    setItems((prev) => [...prev, newItem]);
  }
  const displayItems = items.map((data, index) => <p key={index}>{data}</p>);
  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      {items && displayItems}
    </div>
  );
};

export default AddItem;
