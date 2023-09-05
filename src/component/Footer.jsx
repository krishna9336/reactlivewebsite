import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0"></div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Krishna | All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
