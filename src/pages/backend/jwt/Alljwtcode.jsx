import React, { useEffect } from 'react';

const Alljwtcode = () => {
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
        <h4 className="display-6 fw-bold mb-3">JWT authenticaiton </h4>
        <p className="lead text-muted">
          Use CodeMint’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
        </p>
      </div>

      <hr className="my-4" />

      <section className="mt-3">
        <h2 className="h4 fw-semibold mb-3">Middleware <span className="text-primary">#</span></h2>
        <p>
          Fetchuser Nodejs used Model folder like <code>Middleware/fetchuser.jsx</code> 
        </p>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`const jwt = require("jsonwebtoken");

const JWT_SECRET = 'rahulisagoodB$oy'

const fetchuser =(req, res,next) =>{
    // Get the user from the jwt token and add id to req object 
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please authenticate using a valid token"})
    }
    try {
         const data = jwt.verify (token, JWT_SECRET)
    req.user = data.user;
    next()
    } catch (error) {
       res.status(401).send({error:"please authenticate using a valid token"}) 
    }
   
}

module.exports = fetchuser;
`}
            </code>
          </pre>
        </div>

      </section>
      <section className="mt-3">
        <h2 className="h4 fw-semibold mb-3">Add the Middleware <span className="text-primary">#</span></h2>
        <p>
        Example of fetchuser add the router  like <code>Model/user.jsx</code> 
        </p>

        {/* <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div> */}

        {/* Prism syntax-highlighted block */}
        <div className="mt-4">
          <pre className="language-js">
            <code>
{`router.post('/getuser',fetchuser, async(req,res)=>{
    try{
        userId = req.user.id;
        const user = await UserSchema.findById(userId).select("-password")
res.send(user)
    }catch (error) {
        console.error("error creating user", error)
        return res.status(500).json({ error: "Internal server error" })
    }
})

`}
            </code>
          </pre>
        </div>

      </section>
      {/* <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">npx create react app lab problem <span className="text-primary">#</span></h2>
        <p>
          CodeMint has a base <code>.btn</code> class that sets up basic styles such as padding and content alignment.
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

export default Alljwtcode;
