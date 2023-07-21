import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkModeEnabled, setDarkMode] = useState(false)
  const appClass = darkModeEnabled ? "App dark" : "App light"

  function toggleDarkMode() {
    setDarkMode(!darkModeEnabled)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
