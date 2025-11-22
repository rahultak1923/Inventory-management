import React, { useEffect } from 'react'

const Background = () => {
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
         <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
 <div className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">.bg-primary-subtle</div>
 <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
 <div className="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">.bg-secondary-subtle</div>
 <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
 <div className="p-3 mb-2 bg-success-subtle text-success-emphasis">.bg-success-subtle</div>
 <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
 <div className="p-3 mb-2 bg-danger-subtle text-danger-emphasis">.bg-danger-subtle</div>
 <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
 <div className="p-3 mb-2 bg-warning-subtle text-warning-emphasis">.bg-warning-subtle</div>
 <div className="p-3 mb-2 bg-info text-dark">.bg-info</div>
 <div className="p-3 mb-2 bg-info-subtle text-info-emphasis">.bg-info-subtle</div>
 <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
 <div className="p-3 mb-2 bg-light-subtle text-light-emphasis">.bg-light-subtle</div>
 <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
 <div className="p-3 mb-2 bg-dark-subtle text-dark-emphasis">.bg-dark-subtle</div>
 <div className="p-3 mb-2 bg-body-secondary">.bg-body-secondary</div>
 <div className="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</div>
 <div className="p-3 mb-2 bg-body text-body">.bg-body</div>
 <div className="p-3 mb-2 bg-black text-white">.bg-black</div>
 <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
 <div className="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>
 
         {/* <div className="p-4 border rounded bg-light mt-3">
           <button type="button" className="btn">Base class</button>
         </div> */}
 
         {/* Prism syntax-highlighted block */}
         <div className="mt-4">
           <pre className="language-html">
             <code>
 {`<div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
 <div className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">.bg-primary-subtle</div>
 <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
 <div className="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">.bg-secondary-subtle</div>
 <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
 <div className="p-3 mb-2 bg-success-subtle text-success-emphasis">.bg-success-subtle</div>
 <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
 <div className="p-3 mb-2 bg-danger-subtle text-danger-emphasis">.bg-danger-subtle</div>
 <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
 <div className="p-3 mb-2 bg-warning-subtle text-warning-emphasis">.bg-warning-subtle</div>
 <div className="p-3 mb-2 bg-info text-dark">.bg-info</div>
 <div className="p-3 mb-2 bg-info-subtle text-info-emphasis">.bg-info-subtle</div>
 <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
 <div className="p-3 mb-2 bg-light-subtle text-light-emphasis">.bg-light-subtle</div>
 <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
 <div className="p-3 mb-2 bg-dark-subtle text-dark-emphasis">.bg-dark-subtle</div>
 <div className="p-3 mb-2 bg-body-secondary">.bg-body-secondary</div>
 <div className="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</div>
 <div className="p-3 mb-2 bg-body text-body">.bg-body</div>
 <div className="p-3 mb-2 bg-black text-white">.bg-black</div>
 <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
 <div className="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>`}
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
}

export default Background
