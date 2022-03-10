import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
function App() {
  return (
    <div className="App">
     {/*Since there is no content between tags can have it self clossing */}<Greet/>
    </div>
  );
}

export default App;
