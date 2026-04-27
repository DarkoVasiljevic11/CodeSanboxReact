import React from "react";
import ReactDOM from "react-dom";
const year = new Date().getFullYear();
function Footer() {
  return (
    <div>
      <footer className="footer">
        <p>Copyright {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
