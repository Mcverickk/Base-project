import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Swap from './components/Swap/Swap';
import Pools from './components/Pools/Pools';
import Charts from './components/Charts/Charts';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Swap />} />
          <Route path='/pools' element={<Pools />} />
          <Route path='/charts' element={<Charts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
