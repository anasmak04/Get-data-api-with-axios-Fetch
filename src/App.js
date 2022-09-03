import './App.css';
import axios from "axios";
import Axios from "./components/Axios"
import Fetch from "./components/Fetch"
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
    <Fetch />
    </div>
  );
}

export default App;
