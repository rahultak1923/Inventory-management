import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Addjewellery from './pages/addjewellery/Addjewellery';
import Edittitle from './pages/editjewellery/Edittitle';
import Hero from './pages/herosection/Hero';
import NoteProvider from './context/NoteContext';
import Login from './auth/Login';
import Main from './pages/Main';
import Register from './auth/Register';
// import Aboutedit from './pages/aboutsection/Aboutedit';
// import Title from './pages/titlesection/Title';

function App() {
  return (
    <div className="">
      <NoteProvider>
      <BrowserRouter>
   <Dashboard/>
   <Main/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/addjewellery' element={<Addjewellery/>}/> */}
        <Route path='/edittitle' element={<Edittitle/>}/>
        <Route path='/herosection' element={<Hero/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/aboutsection' element={<Aboutedit/>}/>
        <Route path='/titlesection' element={<Title/>}/> */}
      </Routes>
      </BrowserRouter>
      </NoteProvider>
    </div>
  );
}

export default App;
