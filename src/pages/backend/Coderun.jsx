import React, { useEffect } from 'react';

const CodeRun = () => {
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
        <h4 className="display-6 fw-bold mb-3">MongoDB</h4>
        <p className="lead text-muted">
          Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
        </p>
      </div>

      <hr className="my-4" />
   <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">Code Run Template <span className="text-primary">#</span></h2>
        <p>
          If required to npm all <code>npm commands</code>
        </p>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/yourfilename')
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.error("MongoDB Connected",err))

app.get("/",(req,res)=>{
  res.send("hello backend")})

app.listen(PORT,()=>console.log(\`Server started at PORT :\${PORT}\`))

`}
            </code>
          </pre>
        </div>
    

      </section>
   
      <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">MongoDB Connect <span className="text-primary">#</span></h2>
        <p>
           npm install mongoose, express, cors, nodemon
        </p>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
         <div className="mt-4">
          <pre className="language-js">
            <code>
{`npm i mongoose
npm i cors
npm i nodemon
npm i express
`}
            </code>
          </pre>
        </div>
        <p>
           Separately npm install mongoose, express, cors, nodemon
        </p>
        <div className="mt-3">
          <pre className="language-js">
            <code>
{`npm i mongoose
`}
            </code>
          </pre>
        </div>
        <div className="mt-2">
          <pre className="language-js">
            <code>
{`npm i express
`}
            </code>
          </pre>
        </div>
        <div className="mt-2">
          <pre className="language-js">
            <code>
{`npm i cors
`}
            </code>
          </pre>
        </div>
        <div className="mt-2">
          <pre className="language-js">
            <code>
{`npm i nodemon
`}
            </code>
          </pre>
        </div>

      </section>
      <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">Import <span className="text-primary">#</span></h2>
        <p>
           import mongoose, express, cors
        </p>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
`}
            </code>
          </pre>
        </div>
        <p>
           Separately import mongoose, express, cors, nodemon
        </p>
        <div className="mt-3">
          <pre className="language-js">
            <code>
{`const express = require('express');
`}
            </code>
          </pre>
        </div>
        <div className="mt-2">
          <pre className="language-js">
            <code>
{`const mongoose = require('mongoose');
`}
            </code>
          </pre>
        </div>
        <div className="mt-2">
          <pre className="language-js">
            <code>
{`const cors = require('cors');
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

export default CodeRun;
