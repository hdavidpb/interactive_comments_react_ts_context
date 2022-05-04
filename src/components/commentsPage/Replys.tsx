import React from "react";
import * as SC from "../styles";
import CommentsTable from "./CommentsTable";
const Replys = () => {
  return (
    <SC.ReplysContainer width="90%">
      <CommentsTable marginRight={true} />
      <CommentsTable marginRight={true} />
    </SC.ReplysContainer>
  );
};

export default Replys;
