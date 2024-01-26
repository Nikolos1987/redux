import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { count,second } from './store/action';
function App() {
  const st=useSelector((s)=>s)
  console.log('state',st);
  const dis=useDispatch()
  const ad=()=>{
    dis(count())
  }
  const too=()=>{
    dis(second())
  }
  return (
  
      <div className="App">
        <h1>{st.te}</h1>
        <button onClick={ad}>1</button>
        <button onClick={too}>2</button>
      </div>


  );
}

export default App;
