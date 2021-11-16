import Navbar from "./components/navbar";
import './App.css';

function App() {
  const className = 'nav home';
  return (
    <div>
      <Navbar className={className}/>
      <div className="greeting">
        WHERE THE GAME BEGINS
      </div>
    </div>
      
  );
}

export default App;
