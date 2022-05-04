import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CommentsContext, { commentsContext } from "./context/CommentsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommentsContext>
      <App />
    </CommentsContext>
  </React.StrictMode>
);
