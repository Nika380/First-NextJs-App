import "../styles/globals.scss";
import { createContext } from "react";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

const RootLayout = ({ children }: any) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
