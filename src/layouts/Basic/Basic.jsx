import React from "react";
import { Header, Footer } from "components";

const Basic = ({ children }) => (
  <div className="seven-peaks-testpage">
    <Header />
    <main className="main-content container">{children}</main>
    <Footer />
  </div>
);

export default Basic;
