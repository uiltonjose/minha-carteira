import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./app.routes";
import Auth from "./auth.routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    {/* <App /> */}
    <Auth />
  </BrowserRouter>
);

export default Routes;
