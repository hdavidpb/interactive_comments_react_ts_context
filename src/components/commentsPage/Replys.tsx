import React from "react";
import { IComments } from "../../context/interfaces";
import * as SC from "../styles";
import CommentOrReplyForm, { formType } from "./CommentOrReplyForm";
import CommentsTable from "./CommentsTable";

interface IProps {
  comment: IComments;
}

const Replys = ({ comment }: IProps) => {
  return (
    <SC.ReplysContainer width="90%">
      <CommentsTable comment={comment} marginRight={true} />
      {comment.isReplaying && (
        <CommentOrReplyForm marginRight={true} type={formType.replyForm} />
      )}
    </SC.ReplysContainer>
  );
};

export default Replys;
