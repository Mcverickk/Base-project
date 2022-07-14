import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Swap from './components/Swap/Swap';
import Liquidity from './components/Liquidity/Liquidity';
import Farms from './components/Farms/Farms';
import Homepage from "./components/Homepage/Homepage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/swap' element={<Swap />} />
          <Route path='/liquidity' element={<Liquidity />} />
          <Route path='/farms' element={<Farms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
