import Navbar from "@components/Navbar";
import React, { memo } from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <h3>This is the footer</h3>
      </footer>
      <style jsx>
        {`
          div {
            background: lightyellow;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
