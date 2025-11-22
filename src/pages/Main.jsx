import React, { useEffect } from 'react'
import logo from '../images/logo1.png'

const Main = () => {
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
    <div>
    <div className='main d-flex align-items-center pt-5 flex-column
'>
    <p>Ready to Developement 👉</p>
      <img
            src={logo} 
            alt="Logo"
            width="150"
            height="150"
            className="d-inline-block align-text-top logo"
          />
          <div className="mt-3 text-center">

      <h1>Build fast, Website Developement </h1>
      <h1>with MintCode</h1>
      <p>Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>
          </div>
    </div>

<div className="d-flex justify-content-center mt-3">

    <div className=" container row g-md-5 pb-md-5 mb-5  d-flex">
      <div className="col-lg-8 mb-5">
  
        <h2 className="display-5 mb-3 fw-semibold lh-sm">
          Build and extend in real-time with CSS&nbsp;variables
        </h2>
        <p className="lead fw-normal">
          Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles,
          individual components, and even utilities. We provide dozens of variables for colors, font styles,
          and more at a <code>:root</code> level for use anywhere. On components and utilities, CSS variables
          are scoped to the relevant class and can easily be modified.
        </p>
        <p className="d-flex flex-column lead fw-normal mb-0">
          <a
            href="/docs/5.3/customize/css-variables"
            className="icon-link icon-link-hover fw-semibold mb-3"
          >
            Learn more about CSS variables
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#arrow-right" />
            </svg>
          </a>
        </p>
      </div>

      <div className="row gx-md-5">
        <div className="col-lg-6 mb-3">
          <h3 className="fw-semibold">Using CSS variables</h3>
          <p>
            Use any of our{' '}
            <a href="/docs/5.3/customize/css-variables/#root-variables">
              global <code>:root</code> variables
            </a>{' '}
            to write new styles. CSS variables use the <code>var(--bs-variableName)</code> syntax and can be
            inherited by children elements.
          </p>

          <div className="bd-code-snippet">
            <div className="highlight">
              <pre className="language-scss">
                <code>
{`.component {
  color: var(--bs-gray-800);
  background-color: var(--bs-gray-100);
  border: 1px solid var(--bs-gray-200);
  border-radius: .25rem;
}

.component-header {
  color: var(--bs-purple);
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <h3 className="fw-semibold">Customizing via CSS variables</h3>
          <p>
            Override global, component, or utility class variables to customize Bootstrap just how you like. No
            need to redeclare each rule, just a new variable value.
          </p>

          <div className="bd-code-snippet">
            <div className="highlight">
              <pre className="language-scss">
                <code>
{`body {
  --bs-body-font-family: var(--bs-font-monospace);
  --bs-body-line-height: 1.4;
  --bs-body-bg: var(--bs-gray-100);
}

.table {
  --bs-table-color: var(--bs-gray-600);
  --bs-table-bg: var(--bs-gray-100);
  --bs-table-border-color: transparent;
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

    </div>
  )
}

export default Main
