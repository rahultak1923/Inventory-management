import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Mernsidenavbar = () => {
const location = useLocation();
const { pathname } = location;

const isActive = (path) => pathname === path;

const methodColors = {
  allroutes:'text-primary',
  get: 'text-success',   // Green
  post: 'text-primary',  // Blue
  delete: 'text-danger', // Red
  put: 'text-purple' ,    // Purple (custom class)
  jwt: 'text-success'
};


  return (
     <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white px-3 pt-3 border-end"
      style={{ width: "280px", height: "90vh" }}
    >
      <div className="overflow-auto" style={{ height: "calc(100vh - 60px)" }}>
        {/* Section 1 */}
        <div className="mb-4">
          <h6 className="text-purple fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
            <i className="bi bi-book-fill me-2 text-purple"></i>Getting started
          </h6>
          <ul className="list-unstyled ps-3">
            {[
              "Document", 
            ].map((item, index) => {
              const path = `/mern/jwt/${item.toLowerCase().replace(/\s+/g, '')}`;
              return (
              <li key={index}>
                <Link
                  to={path}
                  className={`d-block py-1 small text-decoration-none text-body px-2 rounded ${
                      isActive(path) ? 'bg-primary-custome text-white' : ''
                    }`}
                >
                  {item}
                </Link>
              </li>
              )
            })}
          </ul>
          
    
        </div>

        {/* Section 2 */}
        <div className="mb-4">
          <h6 className="text-danger fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
            <i className="bi bi-book-fill me-2 text-danger"></i>User CURD
          </h6>
        <ul className="list-unstyled ps-3">
  {["Middleware", "GET", "POST", "DELETE", "PUT"].map((item, index) => {
    const path = `/mern/jwt/${item.toLowerCase()}`;
    const textColor = methodColors[item.toLowerCase()];
    const activeClass = isActive(path) ? 'bg-primary-custome text-white' : '';

    return (
      <li key={index}>
        <Link
          to={path}
          className={`d-block py-1 small text-decoration-none px-2 rounded fw-bold ${textColor} ${activeClass}`}
        >
          {item}
        </Link>
      </li>
    );
  })}
</ul>

          
    
        </div>
        {/* Section 3 */}
        <div className="mb-4">
          <h6 className="text-danger fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
            <i className="bi bi-book-fill me-2 text-danger"></i>Fetch API
          </h6>
        <ul className="list-unstyled ps-3">
  {["AllApi","GET", "POST", "DELETE", "UPDATE"].map((item, index) => {
    const path = `/backend/api/${item.toLowerCase()}`;
    const textColor = methodColors[item.toLowerCase()];
    const activeClass = isActive(path) ? 'bg-primary-custome text-white' : '';

    return (
      <li key={index}>
        <Link
          to={path}
          className={`d-block py-1 small text-decoration-none px-2 rounded fw-bold ${textColor} ${activeClass}`}
        >
          {item}
        </Link>
      </li>
    );
  })}
</ul>

          
    
        </div>
        {/* Section 3 */}
        <div className="mb-4">
          <h6 className="text-danger fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
            <i className="bi bi-book-fill me-2 text-danger"></i>JWT
          </h6>
        <ul className="list-unstyled ps-3">
  {["AlljwtCode","jwt"].map((item, index) => {
    const path = `/backend/jwt/${item.toLowerCase()}`;
    const textColor = methodColors[item.toLowerCase()];
    const activeClass = isActive(path) ? 'bg-primary-custome text-white' : '';

    return (
      <li key={index}>
        <Link
          to={path}
          className={`d-block py-1 small text-decoration-none px-2 rounded fw-bold ${textColor} ${activeClass}`}
        >
          {item}
        </Link>
      </li>
    );
  })}
</ul>

          
    
        </div>
      </div>
    </div>
  )
}

export default Mernsidenavbar
