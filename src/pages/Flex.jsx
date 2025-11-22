import React, { useEffect } from 'react';

const Flex = () => {
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

   const flexs = [
    '.d-flex', '.d-inline-flex',
    '.d-sm-flex', '.d-sm-inline-flex',
    '.d-md-flex', '.d-md-inline-flex',
    '.d-lg-flex', '.d-lg-inline-flex',
    '.d-xl-flex', '.d-xl-inline-flex',
    '.d-xxl-flex', '.d-xxl-inline-flex'
  ];
   const flexDirectionClasses = [
  '.flex-row',
  '.flex-row-reverse',
  '.flex-column',
  '.flex-column-reverse',
  '.flex-sm-row',
  '.flex-sm-row-reverse',
  '.flex-sm-column',
  '.flex-sm-column-reverse',
  '.flex-md-row',
  '.flex-md-row-reverse',
  '.flex-md-column',
  '.flex-md-column-reverse',
  '.flex-lg-row',
  '.flex-lg-row-reverse',
  '.flex-lg-column',
  '.flex-lg-column-reverse',
  '.flex-xl-row',
  '.flex-xl-row-reverse',
  '.flex-xl-column',
  '.flex-xl-column-reverse',
  '.flex-xxl-row',
  '.flex-xxl-row-reverse',
  '.flex-xxl-column',
  '.flex-xxl-column-reverse'
];




  return (
    <div className="container" style={{height : "90vh"}} >
      <div className="mt-4">
        <h4 className="display-6 fw-bold mb-3">Flex</h4>
        <p className="lead text-muted">
this is flex classes        </p>
      </div>

      <hr className="my-4" />

      <section className="mt-3">
        <h2 className="h4 fw-semibold mb-3">Flex class <span className="text-primary">#</span></h2>
        <div className="section">

        <p>
        Responsive variations also exist for{' '}
        <code className="text-pink">.d-flex</code> and{' '}
        <code className="text-pink">.d-inline-flex</code>.
      </p>
      <ul>
        {flexs.map((cls, index) => (
          <li key={index}>
            <code className="text-pink">{cls}</code>
          </li>
        ))}
      </ul>
        </div>
        <div className="section">

        <p>
        Responsive variations also exist for{' '}
        <code className="text-pink">.flex-direction.</code> 
      </p>
      <ul>
        {flexDirectionClasses.map((cls, index) => (
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

export default Flex;
