import React from "react";
import { Header, Footer } from "components";

const Basic = ({ children }) => (
  <div className="react-context-testpage">
    <Header />
    <main className="main-content container">{children}</main>
    <Footer />
  </div>
);

export default Basic;
