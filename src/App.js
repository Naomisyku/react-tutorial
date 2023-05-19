import './App.css';
import Greetings from './components/Greetings';
import Burgers from './components/Burgers';
import FaqeProv from './FaqeProv'

const burger = {
  'cmimi':12,
  'type': 'cheeseburger'
}

const burger2={
  "cmimi":33,
  "type":'delux' 
}

const burgerat = [{
  'cmimi':1224,
  'type': 'cheeseburger delux'
},{
  "cmimi":3322,
  "type":'delux doppio' 
},
]

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Greetings price={burger.cmimi} type={burger.type}/>
      <Greetings price={burger2.cmimi} type={burger2.type}/>

      <Burgers burgersArray={burgerat}/>

      <FaqeProv burgersArray={burgerat}/>
    </div>
  );
}

export default App;
