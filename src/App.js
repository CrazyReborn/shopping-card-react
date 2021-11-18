import Navbar from "./components/navbar";
import './App.css';
import cart from "./components/cart-logic";
import { useState } from "react";

function App() {
  const className = 'nav home';
  const [items, setItems] = useState(cart.added.length)
  return (
    <div>
      <Navbar items={items} className={className}/>
      <div className="greeting">
        WHERE THE GAME BEGINS
      </div>
    </div>
      
  );
}

export default App;
