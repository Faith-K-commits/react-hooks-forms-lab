import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  function onSearchChange(event) {
    const value = event.target.value;
    const searchedItems = itemData.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setItems(searchedItems);
    setIsSearched(true);
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onSearchChange={onSearchChange} />
    </div>
  );
}

export default App;
