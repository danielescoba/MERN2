import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div>
      <PersonCard firstName = "Doe" lastName = "Jane" age= {45} hairColor="Black"/>
      <PersonCard firstName = "Smith" lastName = "John" age= {88} hairColor="Brown"/>
    </div>
  );
}

export default App;
