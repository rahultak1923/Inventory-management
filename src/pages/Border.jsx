import React, { useEffect } from 'react';

const Border = () => {
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
    <>
     <div className="container" style={{height : "90vh"}} >
      <h2 className="mb-4 fw-bold">Bootstrap Borders Showcase</h2>

      <div className="section mb-5">
        <h5 className="fw-semibold mb-3">Additive</h5>
        <p>Add borders to custom elements:</p>
        <div className="mb-3 d-flex gap-2">
          <span className="border p-2">.border</span>
          <span className="border-top p-2">.border-top</span>
          <span className="border-end p-2">.border-end</span>
          <span className="border-bottom p-2">.border-bottom</span>
          <span className="border-start p-2">.border-start</span>
        </div>
        <pre className="language-html">
          <code>{`<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>`}</code>
        </pre>
      </div>

      <div className="section mb-5">
        <h5 className="fw-semibold mb-3">Subtractive</h5>
        <p>Or remove borders:</p>
        <div className="mb-3 d-flex gap-2">
          <span className="border border-0 p-2">.border-0</span>
          <span className="border border-top-0 p-2">.border-top-0</span>
          <span className="border border-end-0 p-2">.border-end-0</span>
          <span className="border border-bottom-0 p-2">.border-bottom-0</span>
          <span className="border border-start-0 p-2">.border-start-0</span>
        </div>
        <pre className="language-html">
          <code>{`<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>`}</code>
        </pre>
      </div>

      <div className="section mb-5">
        <h5 className="fw-semibold mb-3">Border Colors</h5>
        <div className="mb-3 d-flex flex-wrap gap-2">
          {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'black', 'white'].map(color => (
            <span key={color} className={`border border-${color} p-2`}>.border-{color}</span>
          ))}
        </div>
        <pre className="language-html">
          <code>{`<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-info"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-black"></span>
<span class="border border-white"></span>`}</code>
        </pre>
      </div>

      <div className="section mb-5">
        <h5 className="fw-semibold mb-3">Border Opacity</h5>
        <div className="mb-3">
          <div className="border border-success p-2 mb-2">This is default success border</div>
          <div className="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity</div>
          <div className="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity</div>
          <div className="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity</div>
          <div className="border border-success p-2 border-opacity-10">This is 10% opacity</div>
        </div>
        <pre className="language-html">
          <code>{`<div class="border border-success">...</div>
<div class="border border-success border-opacity-75">...</div>
<div class="border border-success border-opacity-50">...</div>
<div class="border border-success border-opacity-25">...</div>
<div class="border border-success border-opacity-10">...</div>`}</code>
        </pre>
      </div>

      <div className="section mb-5">
        <h5 className="fw-semibold mb-3">Border Width</h5>
        <div className="mb-3 d-flex gap-2">
          {[1, 2, 3, 4, 5].map(n => (
            <span key={n} className={`border border-${n} p-2`}>.border-{n}</span>
          ))}
        </div>
        <pre className="language-html">
          <code>{`<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>`}</code>
        </pre>
      </div>

      <div className="section mb-5">
        <h5 className="fw-semibold mb-3">Border Radius</h5>
        <div className="mb-3 d-flex flex-wrap gap-2">
          {['rounded', 'rounded-top', 'rounded-end', 'rounded-bottom', 'rounded-start', 'rounded-0', 'rounded-1', 'rounded-2', 'rounded-3', 'rounded-4', 'rounded-5', 'rounded-circle', 'rounded-pill'].map(r => (
            <img
              key={r}
              src="https://plus.unsplash.com/premium_photo-1668480230542-e53eb5a41eb3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={r}
              className={r}
              width={50}
              height={50}
            />
          ))}
        </div>
        <pre className="language-html">
          <code>{`<img src="..." class="rounded" />
<img src="..." class="rounded-top" />
<img src="..." class="rounded-end" />
<img src="..." class="rounded-bottom" />
<img src="..." class="rounded-start" />
<img src="..." class="rounded-0" />
<img src="..." class="rounded-1" />
<img src="..." class="rounded-2" />
<img src="..." class="rounded-3" />
<img src="..." class="rounded-4" />
<img src="..." class="rounded-5" />
<img src="..." class="rounded-circle" />
<img src="..." class="rounded-pill" />`}</code>
        </pre>
      </div>
    </div>
    </>


  );
};

export default Border;
