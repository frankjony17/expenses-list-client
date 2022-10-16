import React from "react";

const Footer = () => {
  let d = new Date();

  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="http://fk" target="_blank" rel="noreferrer">
            FkSolutions
          </a>{" "}
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
