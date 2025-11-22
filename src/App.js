import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidenavbar from './components/Sidenavbar';
import Rightnavbar from './components/Rightnavbar';
import Home from './pages/Home';
import Main from './pages/Main';
import { useState } from 'react';
import Reactjs from './pages/Reactjs';
import Homebackend from './pages/backend/Homebackend';
import Sidenavbarbackend from './components/Sidenavbarbackend';
import Nodejs from './pages/backend/Nodejs';
import Class from './pages/Class';
import Background from './pages/Background';
import Border from './pages/Border';
import Flex from './pages/Flex';
import JustifyContent from './pages/JustifyContent';
import AlignItem from './pages/AlignItem';
import Active from './pages/Active';
import Mongodb from './pages/backend/Mongodb';
import CodeRun from './pages/backend/Coderun';
import Model from './pages/backend/Model';
import Get from './pages/backend/Get';
import Post from './pages/backend/Post';
import Delete from './pages/backend/Delete';
import Put from './pages/backend/Put';
import Allroutes from './pages/backend/Allroutes';

// backend/api
import Getapi from './pages/backend/api/Get_api';
import Postapi from './pages/backend/api/Post_api';
import Deleteapi from './pages/backend/api/Delete_api';
import Updateapi from './pages/backend/api/Update';
import Allapi from './pages/backend/api/All_api';
import Alljwtcode from './pages/backend/jwt/Alljwtcode';
import Mernsidenavbar from './components/Mernsidenavbar';
import Document from './pages/mern/jwt/Document';

// LayoutWrapper for routing + sidebar logic
function LayoutWrapper() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isBackendPage = location.pathname.startsWith('/backend');
  const isMernPage = location.pathname.startsWith('/mern')

  const [showSidebar, setShowSidebar] = useState(false); // only for left sidebar

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbar onMenuClick={toggleSidebar} />

   {!isMainPage ? (
  <div className="d-flex container1400 position-relative">
    {/* BACKDROP: only visible on mobile when sidebar is open */}
    {showSidebar && (
      <div className="mobile-backdrop" onClick={() => setShowSidebar(false)}></div>
    )}

    {/* LEFT Sidebar Overlay */}
<div className={`sidebar-overlay ${showSidebar ? 'show' : ''}`}>
  {isBackendPage ? (
    <Sidenavbarbackend setShowSidebar={setShowSidebar}/>
  ) : isMernPage ? (
    <Mernsidenavbar setShowSidebar={setShowSidebar}/>
  ) : (
    <Sidenavbar setShowSidebar={setShowSidebar}/>
  )}
</div>


    {/* Main Content */}
    <div className="flex-grow-1 overflow-auto">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/class" element={<Class />} />
        <Route path="/background" element={<Background />} />
        <Route path="/border" element={<Border />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/justifycontent" element={<JustifyContent />} />
        <Route path="/alignitem" element={<AlignItem />} />
        <Route path="/active" element={<Active />} />

        {/* backend sidenavbar */}
        <Route path="/backend/document" element={<Homebackend />} />
        <Route path="/backend/coderun" element={<CodeRun />} />
        <Route path="/backend/nodejs" element={<Nodejs />} />
        <Route path="/backend/mongodb" element={<Mongodb />} />
        <Route path="/backend/model" element={<Model />} />
        <Route path="/backend/get" element={<Get />} />
        <Route path="/backend/post" element={<Post />} />
        <Route path="/backend/delete" element={<Delete />} />
        <Route path="/backend/put" element={<Put />} />
        <Route path="/backend/allroutes" element={<Allroutes />} />

        {/* backend / api */}
        <Route path='/backend/api/get' element={<Getapi/>} />
        <Route path='/backend/api/post' element={<Postapi/>} />
        <Route path='/backend/api/delete' element={<Deleteapi/>} />
        <Route path='/backend/api/update' element={<Updateapi/>} />
        <Route path='/backend/api/allapi' element={<Allapi/>} />

         {/* backend / jwt */}
         <Route path='/backend/jwt/alljwtcode' element={<Alljwtcode/>} />

         {/* mern / document */}
         <Route path='/mern/jwt/document' element={<Document/>} />
         <Route path='/mern/jwt/middleware' element={<Document/>} />

      </Routes>
    </div>

    {/* Right Sidebar only on desktop */}
    <div className="d-none d-md-block">
      <Rightnavbar />
    </div>
  </div>
) : (
  <Routes>
    <Route path="/" element={<Main />} />
  </Routes>
)}


    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
