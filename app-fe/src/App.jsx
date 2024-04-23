import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import './index.css'
import Duelist from "./pages/Duelist/Duelist"
import Home from "./pages/Home/Home"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Initiator from "./pages/Initiator/Initiator"
import Sentinel from "./pages/Sentinel/Sentinel"
import Controller from "./pages/Controller/Controller"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Duelist" element={<Duelist/>}/>
        <Route path="/Initiator" element={<Initiator/>}/>
        <Route path="/Sentinel" element={<Sentinel/>}/>
        <Route path="/Controller" element={<Controller/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
