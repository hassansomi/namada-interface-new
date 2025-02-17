import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { RequesterProvider } from "services";

import { Setup } from "./Setup";

export default ((): void => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <RequesterProvider>
          <Setup />
        </RequesterProvider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
