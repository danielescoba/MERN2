import './App.css';
import Tabs from './Components/Tabs'


function App() {
  return (
  <div>
    <Tabs TapsItems={[
      {header:"Tab1" ,context:"Tab1 Content"},
      {header:"Tab2" ,context:"Tab2 Content"},
      {header:"Tab3" ,context:"Tab3 Content"}
    ]}/>
  </div>
  );
}


export default App;
