import './App.css';
import axios from "axios";
function App() {

  const btnsubmit = () => {
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => {
    console.log(res.data);
  })
  
  .catch(err => {
    console.log(err)
  }) 
  }
  return (
    <div className="App">
     <button onClick={btnsubmit}>click here to fetch data from api</button>
    </div>
  );
}

export default App;
