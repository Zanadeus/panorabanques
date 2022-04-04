import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./Components/Header"
import SaisieClient from "./Pages/SaisieClient"
import AfficherClient from "./Pages/AfficherClients"

function App() 
{
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<SaisieClient />} />
        <Route path="liste" element={<AfficherClient />} />
      </Routes>
    </Router>
  );
}

export default App;

