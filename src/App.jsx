import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import testcomp from './components/testcomp.jsx';
import testcompstyle from './components/testcompstyle.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click to increase the number: {count}
        </button>
      </div>
    </>
  )
}

function Corn(){
<>
<div><Testcomp/></div>




</>
}
export default App
