import React from "react";
import { Link, MicroApp } from "umi";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div>
        <div>
        <Link to='/app1'>app1</Link>
        </div>
        <div>
        <Link to='/app2'>app2</Link>

        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
