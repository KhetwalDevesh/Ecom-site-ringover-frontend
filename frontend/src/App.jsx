import Header from '../components/Header'
import Footer from '../components/Footer'
import {  Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Journey from '../pages/Journey';
import Team from '../pages/Team';
import Store from '../pages/Store';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import ProductDetails from '../components/ProductDetails';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route  path='/journey' element={< Journey />}></Route>
        <Route  path='/team' element={< Team />}></Route>
        <Route  path='/store' element={< Store />}></Route>
        <Route  path='/contact' element={< Contact />}></Route>
        <Route  path='/login' element={< Login />}></Route>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
