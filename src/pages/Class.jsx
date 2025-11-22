import React, { useEffect } from 'react';

const Class = () => {
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
    <div className="container" style={{height : "90vh"}} >
      <div className="mt-2">
        <h4 className="display-6 fw-bold mb-3">ReactJs</h4>
        <p className="lead text-muted">
          Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
        </p>
      </div>

      <hr className="my-4" />
        <h2 className="h4 fw-semibold mb-3">Background color <span className="text-primary">#</span></h2>

      <section className="mt-5">
       <div className="btn m-1" style={{ background: "#0d6efd", color: "white" }}>#0d6efd</div>
<div className="btn m-1" style={{ background: "#6610f2", color: "white" }}>#6610f2</div>
<div className="btn m-1" style={{ background: "#6f42c1", color: "white" }}>#6f42c1</div>
<div className="btn m-1" style={{ background: "#d63384", color: "white" }}>#d63384</div>
<div className="btn m-1" style={{ background: "#dc3545", color: "white" }}>#dc3545</div>
<div className="btn m-1" style={{ background: "#fd7e14", color: "white" }}>#fd7e14</div>
<div className="btn m-1" style={{ background: "#ffc107", color: "black" }}>#ffc107</div>
<div className="btn m-1" style={{ background: "#198754", color: "white" }}>#198754</div>
<div className="btn m-1" style={{ background: "#20c997", color: "white" }}>#20c997</div>
<div className="btn m-1" style={{ background: "#0dcaf0", color: "black" }}>#0dcaf0</div>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
        <div className="mt-4">
          <pre className="language-html">
            <code>
{`<div className="btn m-1" style={{ background: "#0d6efd", color: "white" }}>#0d6efd</div>
<div className="btn m-1" style={{ background: "#6610f2", color: "white" }}>#6610f2</div>
<div className="btn m-1" style={{ background: "#6f42c1", color: "white" }}>#6f42c1</div>
<div className="btn m-1" style={{ background: "#d63384", color: "white" }}>#d63384</div>
<div className="btn m-1" style={{ background: "#dc3545", color: "white" }}>#dc3545</div>
<div className="btn m-1" style={{ background: "#fd7e14", color: "white" }}>#fd7e14</div>
<div className="btn m-1" style={{ background: "#ffc107", color: "black" }}>#ffc107</div>
<div className="btn m-1" style={{ background: "#198754", color: "white" }}>#198754</div>
<div className="btn m-1" style={{ background: "#20c997", color: "white" }}>#20c997</div>
<div className="btn m-1" style={{ background: "#0dcaf0", color: "black" }}>#0dcaf0</div>
`}
            </code>
          </pre>
        </div>

      </section>
      <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">Backgroud with opacity <span className="text-primary">#</span></h2>
        <div className="bg-primary p-2 text-white">This is default primary background</div>
<div className="bg-primary p-2 text-white bg-opacity-75">This is 75% opacity primary background</div>
<div className="bg-primary p-2 text-dark bg-opacity-50">This is 50% opacity primary background</div>
<div className="bg-primary p-2 text-dark bg-opacity-25">This is 25% opacity primary background</div>
<div className="bg-primary p-2 text-dark bg-opacity-10">This is 10% opacity primary background</div>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`
<div className="bg-primary p-2 text-white">This is default primary background</div>
<div className="bg-primary p-2 text-white bg-opacity-75">This is 75% opacity primary background</div>
<div className="bg-primary p-2 text-dark bg-opacity-50">This is 50% opacity primary background</div>
<div className="bg-primary p-2 text-dark bg-opacity-25">This is 25% opacity primary background</div>
<div className="bg-primary p-2 text-dark bg-opacity-10">This is 10% opacity primary background</div>

`}
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

export default Class;
