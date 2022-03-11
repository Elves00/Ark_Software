import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Test from './Components/Test';
function App() {
  return (
    <div className="App">
     {/*Since there is no content between tags can have it self clossing */}
     <Greet name="User"><p>This is the childrens prop</p></Greet>
     <Welcome name="User"><p>Some random child writing</p></Welcome>
     <Hello/>
     <Message></Message>
    <Test></Test>
    </div>
  );
}

export default App;
