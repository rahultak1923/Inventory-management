import React, { useEffect } from 'react';

const JustifyContent = () => {
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


const justifyContentClasses = [
  '.justify-content-start',
  '.justify-content-end',
  '.justify-content-center',
  '.justify-content-between',
  '.justify-content-around',
  '.justify-content-evenly',

  '.justify-content-sm-start',
  '.justify-content-sm-end',
  '.justify-content-sm-center',
  '.justify-content-sm-between',
  '.justify-content-sm-around',
  '.justify-content-sm-evenly',

  '.justify-content-md-start',
  '.justify-content-md-end',
  '.justify-content-md-center',
  '.justify-content-md-between',
  '.justify-content-md-around',
  '.justify-content-md-evenly',

  '.justify-content-lg-start',
  '.justify-content-lg-end',
  '.justify-content-lg-center',
  '.justify-content-lg-between',
  '.justify-content-lg-around',
  '.justify-content-lg-evenly',

  '.justify-content-xl-start',
  '.justify-content-xl-end',
  '.justify-content-xl-center',
  '.justify-content-xl-between',
  '.justify-content-xl-around',
  '.justify-content-xl-evenly',

  '.justify-content-xxl-start',
  '.justify-content-xxl-end',
  '.justify-content-xxl-center',
  '.justify-content-xxl-between',
  '.justify-content-xxl-around',
  '.justify-content-xxl-evenly',
];



  return (
    <div className="container" style={{height : "90vh"}} >
      <div className="mt-4">
        <h4 className="display-6 fw-bold mb-3">Justify Content</h4>
        {/* <p className="lead text-muted">
this is flex classes        </p> */}
      </div>

      <hr className="my-4" />

      <section className="mt-3">
       
        <div className="section">
        <h2 className="h4 fw-semibold mb-3">Justify-Content <span className="text-primary">#</span></h2>

        <p>
        Responsive variations also exist for{' '}
        <code className="text-pink">.justify-content.</code> 
      </p>
      <ul>
        {justifyContentClasses.map((cls, index) => (
          <li key={index}>
            <code className="text-pink">{cls}</code>
          </li>
        ))}
      </ul>
        </div>
   


        {/* <div className="mt-4">
          <pre className="language-js">
            <code>
{`// Example of ReactJS code block
console.log("Hello");
const a = 10;
if (a > 5) {
  console.log("a is greater than 5");
}`}
            </code>
          </pre>
        </div> */}

      </section>
      {/* <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">npx create react app lab problem <span className="text-primary">#</span></h2>
        <p>
          Bootstrap has a base <code>.btn</code> class that sets up basic styles such as padding and content alignment.
          By default, <code>.btn</code> controls have a transparent border and background color,
          and lack any explicit focus and hover styles.
        </p>

       
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`
 "ajv": "^8.17.1",

`}
            </code>
          </pre>
        </div>

      </section> */}
        <div className="alert alert-warning mt-4" role="alert">
          If you are using the <code>.btn</code> class on its own, remember to at least define some explicit <code>:focus</code> and/or <code>:focus-visible</code> styles.
        </div>
    </div>
  );
};

export default JustifyContent;
