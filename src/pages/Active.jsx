import React, { useEffect } from 'react';

const Active = () => {
  useEffect(() => {
    // Add Prism CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/prism/prism.css';
    document.head.appendChild(link);

    // Add Prism JS
    const script = document.createElement('script');
    script.src = '/prism/prism.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container" style={{height : "89vh"}} >
      <div className="mt-2">
        <h4 className="display-6 fw-bold mb-3">Active</h4>
        <p className="lead text-muted">
          Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
        </p>
      </div>

      <hr className="my-4" />

      <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">Base class <span className="text-primary">#</span></h2>
        <p>
           Import useLocation from the react-router-dom
        </p>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`import { Link, useLocation } from 'react-router-dom';
`}
            </code>
          </pre>
        </div>

      </section>
      <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">npx create react app lab problem <span className="text-primary">#</span></h2>
        <p>
          If your sidebar menu tab is max <code>Two</code>
        </p>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`const isActive = (path) => pathname.startsWith(path);
`}
            </code>
          </pre>
        </div>
        <p>
            If your sidebar menu tab is more then <code>Two</code>
        </p>
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`const location = useLocation();
const { pathname } = location;

const isActive = (path) => pathname === path;
`}
            </code>
          </pre>
        </div>

      </section>
      <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">npx create react app lab problem <span className="text-primary">#</span></h2>
        <p>
          Bootstrap has a base <code>.btn</code> class that sets up basic styles such as padding and content alignment.
          By default, <code>.btn</code> controls have a transparent border and background color,
          and lack any explicit focus and hover styles.
        </p>

        <div className="mt-4">
        <pre className="language-js">
  <code>
{`return (
  <Link
    to="/document"
    className={\`d-block py-1 small text-decoration-none text-body px-2 rounded \${pathname === '/document' ? 'bg-primary-custome text-white' : ''}\`}
  >
    Document
  </Link>

  <Link
    to="/home"
    className={\`d-block py-1 small text-decoration-none text-body px-2 rounded \${pathname === '/home' ? 'bg-primary-custome text-white' : ''}\`}
  >
    Home
  </Link>
);`}
  </code>
</pre>

<p>If your sidebar is menu tab is more then <code>Two </code>Like this website to use this code</p>

        </div>
        <div className="mt-4">
        <pre className="language-js">
  <code>
{`<div className="mb-4">
  <h6 className="text-purple fw-semibold mb-2" style={{ fontSize: "0.95rem" }}>
    <i className="bi bi-book-fill me-2 text-purple"></i>Getting started
  </h6>
  <ul className="list-unstyled ps-3">
    {[
      "Contentdss", "BrfowsersDevices", "JavaScrispt", "Webpafsck",
      "Parcsel", "Vifte", "Accesssibility", "RfFS", "RTLs", "Conftribute"
    ].map((item, index) => {
      const path = \`/document/\${item.toLowerCase().replace(/\\s+/g, '')}\`;
      return (
        <li key={index}>
          <Link
            to={path}
            className={\`d-block py-1 small text-decoration-none text-body px-2 rounded \${pathname === path ? 'bg-primary-custome text-white' : ''}\`}
          >
            {item}
          </Link>
        </li>
      );
    })}
  </ul>
</div>`}
  </code>
</pre>



        </div>

      </section>
      <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">Custome Css in this sidebar active tab<span className="text-primary">#</span></h2>
        <p>
          Bootstrap has a base <code>.btn</code> class that sets up basic styles such as padding and content alignment.
          By default, <code>.btn</code> controls have a transparent border and background color,
          and lack any explicit focus and hover styles.
        </p>

        <div className="mt-4">
        <pre className="language-css">
  <code>
{`.bg-primary-custome{
   background-color: #063ca324 !important; /* custom blue transparent */
  color: #063ca3 !important;
  font-weight: 500;
}`}
  </code>
</pre>



        </div>

      </section>
        <div className="alert alert-warning mt-4" role="alert">
          If you are using the <code>.btn</code> class on its own, remember to at least define some explicit <code>:focus</code> and/or <code>:focus-visible</code> styles.
        </div>
    </div>
  );
};

export default Active;
