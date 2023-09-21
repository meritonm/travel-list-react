import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackignList from "./PackignList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleDeleteAllItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all imtes?"
    );

    if (confirmed) setItems([]);
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackignList
        items={items}
        onDelteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        allItemDelete={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
