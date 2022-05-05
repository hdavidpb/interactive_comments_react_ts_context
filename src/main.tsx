import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CommentsContext, { commentsContext } from "./context/CommentsContext";
import UserContext from "./context/UsersContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserContext>
    <CommentsContext>
      <App />
    </CommentsContext>
  </UserContext>
);
