import React, { useEffect } from 'react';

const AlignItem = () => {
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


  const alignItemsClasses = [
    '.align-items-start', '.align-items-end', '.align-items-center',
    '.align-items-baseline', '.align-items-stretch',
    '.align-items-sm-start', '.align-items-sm-end', '.align-items-sm-center',
    '.align-items-sm-baseline', '.align-items-sm-stretch',
    '.align-items-md-start', '.align-items-md-end', '.align-items-md-center',
    '.align-items-md-baseline', '.align-items-md-stretch',
    '.align-items-lg-start', '.align-items-lg-end', '.align-items-lg-center',
    '.align-items-lg-baseline', '.align-items-lg-stretch',
    '.align-items-xl-start', '.align-items-xl-end', '.align-items-xl-center',
    '.align-items-xl-baseline', '.align-items-xl-stretch',
    '.align-items-xxl-start', '.align-items-xxl-end', '.align-items-xxl-center',
    '.align-items-xxl-baseline', '.align-items-xxl-stretch'
  ];
const alignSelfClasses = [
  '.align-self-start', '.align-self-end', '.align-self-center',
  '.align-self-baseline', '.align-self-stretch',

  '.align-self-sm-start', '.align-self-sm-end', '.align-self-sm-center',
  '.align-self-sm-baseline', '.align-self-sm-stretch',

  '.align-self-md-start', '.align-self-md-end', '.align-self-md-center',
  '.align-self-md-baseline', '.align-self-md-stretch',

  '.align-self-lg-start', '.align-self-lg-end', '.align-self-lg-center',
  '.align-self-lg-baseline', '.align-self-lg-stretch',

  '.align-self-xl-start', '.align-self-xl-end', '.align-self-xl-center',
  '.align-self-xl-baseline', '.align-self-xl-stretch',

  '.align-self-xxl-start', '.align-self-xxl-end', '.align-self-xxl-center',
  '.align-self-xxl-baseline', '.align-self-xxl-stretch',
];



  return (
    <div className="container" style={{height : "90vh"}} >
      <div className="mt-4">
        <h4 className="display-6 fw-bold mb-3">Align Items</h4>
        {/* <p className="lead text-muted">
this is flex classes        </p> */}
      </div>

      <hr className="my-4" />

      <section className="mt-3">
       
        <div className="section">
        <h2 className="h4 fw-semibold mb-3">Align Items <span className="text-primary">#</span></h2>

        <p>
        Responsive variations also exist for{' '}
        <code className="text-pink">.Align Items.</code> 
      </p>
      <ul>
        {alignItemsClasses.map((cls, index) => (
          <li key={index}>
            <code className="text-pink">{cls}</code>
          </li>
        ))}
      </ul>
        </div>
        <div className="section">
        <h2 className="h4 fw-semibold mb-3">Align Self Classes <span className="text-primary">#</span></h2>

        <p>
        Responsive variations also exist for{' '}
        <code className="text-pink">.Align Self.</code> 
      </p>
      <ul>
        {alignSelfClasses.map((cls, index) => (
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

export default AlignItem;
