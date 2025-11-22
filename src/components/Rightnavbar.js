import React from 'react'
import { Link } from 'react-router-dom'

const Rightnavbar = () => {
  return (
    <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white px-3 pt-3 border-end "
      style={{ width: "280px", height: "90vh" }}
    >
      <div
        className="overflow-auto"
        style={{ height: "calc(100vh - 60px)" }}
      >
        {/* Section 1 */}
        <div className="mb-4">
          <h6 className="text-purple fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
            <i className="bi bi-book-fill me-2 text-purple"></i>This is right
          </h6>
          <ul className="list-unstyled ps-3">
            {[
              "Introduction", "Download", "Contents", "Browsers & devices",
              "JavaScript", "Webpack", "Parcel", "Vite", 
            ].map((item, index) => (
              <li key={index}>
                <Link to="#" className="text-body d-block py-1 small text-decoration-none">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-4">
          <h6 className="text-pink fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
            <i className="bi bi-scissors me-2 text-pink"></i>Customize
          </h6>
          <ul className="list-unstyled ps-3">
            {[
              "Overview", "Sass", "Options", "Color", "Color modes",
              "Components", "CSS variables"
            ].map((item, index) => (
              <li key={index}>
                <Link to="#" className="text-body d-block py-1 small text-decoration-none">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Rightnavbar
