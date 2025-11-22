import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidenavbar = ({setShowSidebar}) => {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (path) => pathname === path;

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
            {["Home","Reactjs", "Class", "Active"].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/\s+/g, '')}`;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    onClick={()=> setShowSidebar(false)}
                    className={`d-block py-1 small text-decoration-none text-body px-2 rounded ${
                      isActive(path) ? 'bg-primary-custome text-white' : ''
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-4">
          <h6 className="text-success fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
            <i className="bi bi-book-fill me-2 text-success"></i>Utilities
          </h6>
          <ul className="list-unstyled ps-3">
            {["Flex", "JustifyContent", "AlignItem", "Border", "Background"].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/\s+/g, '')}`;
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
              );
            })}
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-4">
          <h6 className="text-pink fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
            <i className="bi bi-scissors me-2 text-pink"></i>Customize
          </h6>
          <ul className="list-unstyled ps-3">
            {[
              "Overview", "Sass", "Options", "Color", "ColorModes", "Components", "CSSVariables"
            ].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/\s+/g, '')}`;
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
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
