import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="">
        <h4 className="display-6 fw-bold mb-3">Buttons</h4>
        <p className="lead text-muted">
          Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
        </p>
      </div>

      <hr className="my-4" />

      <section className="mt-5">
        <h2 className="h4 fw-semibold mb-3">Base class <span className="text-primary">#</span></h2>
        <p>
          Bootstrap has a base <code>.btn</code> class that sets up basic styles such as padding and content alignment.
          By default, <code>.btn</code> controls have a transparent border and background color,
          and lack any explicit focus and hover styles.
        </p>

        <div className="p-4 border rounded bg-light mt-3">
          <button type="button" className="btn">Base class</button>
        </div>

        <div className="alert alert-warning mt-4" role="alert">
          If you are using the <code>.btn</code> class on its own, remember to at least define some explicit <code>:focus</code> and/or <code>:focus-visible</code> styles.
        </div>
      </section>
    </div>
  );
};

export default Home;
