import React, { useState } from 'react';
import logo from './logo.png';
import { useNavigate, useLocation } from 'react-router-dom';



const Navbar = ({ onMenuClick }) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  // ✅ Map keyword to corresponding routes
  const topicRouteMap = {
    react: '/reactjs',
    border:'/border',
    flex:'/flex',
    backend: '/document/document',
    nodejs: 'document/nodejs',
    home: '/home',
    javascript: '/reactjs',
    overview: '/backendhome',
    // 🔁 add more mappings as needed
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();
    if (!term) return;

    // find the route based on the topic keyword
    const matchedRoute = Object.keys(topicRouteMap).find(key =>
      term.includes(key)
    );

    if (matchedRoute) {
      const route = topicRouteMap[matchedRoute];
      sessionStorage.setItem('searchTerm', term);

      if (location.pathname !== route) {
        navigate(route); // Go to route and scroll after component loads
      } else {
        scrollToHeading(term); // Already on page, just scroll
      }
    } else {
      alert('No matching topic or route found!');
    }

    setSearchTerm('');
  };

  // 🔍 Scroll to heading matching the topic
  const scrollToHeading = (term) => {
    setTimeout(() => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let found = false;
      headings.forEach((heading) => {
        if (heading.innerText.toLowerCase().includes(term)) {
          heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
          heading.style.backgroundColor = '#ffeeba';
          found = true;
        }
      });

      if (!found) alert('Topic not found on this page!');
    }, 300);
  };

  return (
    <nav className="navbar navbar-expand-lg border-body navbar-r shadow sticky-top" data-bs-theme="dark" style={{ background: "rgb(122, 54, 250)" }}>
      <div className="container-fluid container">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top logo" />
        </a>
        {/* <button className="btn btn-outline-light d-md-none me-2" onClick={onMenuClick}>
        <i class="bi bi-three-dots" style={{ fontSize: "1.5rem" }}> </i>
        </button> */}
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-search text-white mx-2 show-mobile" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onMenuClick} width="20" height="20" fill="currentColor" class="bi bi-three-dots text-white show-mobile" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>

        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
    <a
      className={`nav-link ${pathname.startsWith('/home') ? 'active' : ''}`}
      href="/home"
    >
      Frontend
    </a>
  </li>
<li className="nav-item">
    <a
      className={`nav-link ${pathname.startsWith('/backend') ? 'active' : ''}`}
      href="/backend/document"
    >
      Backend
    </a>
  </li>        
<li className="nav-item">
    <a
      className={`nav-link ${pathname.startsWith('/mern') ? 'active' : ''}`}
      href="/mern/jwt/document"
    >
      MERN
    </a>
  </li>        
<li className="nav-item">
    <a
      className={`nav-link ${pathname.startsWith('/Question') ? 'active' : ''}`}
      href="/mern/jwt/document"
    >
      Question
    </a>
  </li>        
    </ul>

          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search topic"
              aria-label="Search"
              style={{ background: "#692cdf", border: "0.1px solid #ffffff75" }}
            />
            <button className="btn btn-outline-light" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
