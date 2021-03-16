import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler d-inline-block border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Image src="/image/Cubo.png" width="50" height="50" />
          </button>
          <h2 className="d-inline-block mt-0">Rydixs</h2>
        </div>
      </nav>
      <style jsx>
        {`
          h2 {
            color: white;
            margin-left: 0.5em;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
