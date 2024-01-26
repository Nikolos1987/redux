import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { count } from './store/action';
function App() {
  const st=useSelector((s)=>s)
  console.log('state',st);
  const dis=useDispatch()
  const ad=()=>{
    dis(count())
  }
  return (
  
      <div className="App">
        <h1>{st.te}</h1>
        <button onClick={ad}></button>
      </div>


  );
}

export default App;
