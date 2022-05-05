import { useContext } from "react";
import { commentsContext } from "../../context/CommentsContext";
import { IComments } from "../../context/interfaces";

import { usersContext } from "../../context/UsersContext";
import useSimpleForm from "../../hooks/useSimpleForm";
import * as SC from "../styles";

export enum formType {
  replyForm = "REPLY",
  commentFrom = "SEND",
}

interface IProps {
  type: formType;
  marginRight?: boolean;
}

const CommentOrReplyForm = ({ type, marginRight }: IProps) => {
  const { user } = useContext(usersContext);
  const { handleAddNewComment, handleAddNewReply, replyID } =
    useContext(commentsContext);
  const { formValues, handleFormValues, handleClearValues } = useSimpleForm();

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValues.textArea.trim()) {
      console.log("Almost write a description");
      return;
    }

    switch (type) {
      case formType.commentFrom:
        const newComment: IComments = {
          id: Date.now(),
          date: new Date().toISOString(),
          description: formValues.textArea,
          image: user?.image,
          points: 0,
          user: user!.nickname,
          isComment: true,
          isReplaying: false,
          replys: [],
        };
        handleAddNewComment(newComment);
        handleClearValues();
        return;

      case formType.replyForm:
        const newReplyComment: IComments = {
          id: Date.now(),
          date: new Date().toISOString(),
          description: formValues.textArea,
          image: user?.image,
          points: 0,
          user: user!.nickname,
          isComment: false,
          isReplaying: false,
          replys: [],
        };
        handleAddNewReply(newReplyComment, replyID);
        console.log("ESTO ES UN REPLY");
        return;

      default:
        console.log("DEFAULT");
    }
  };

  return (
    <SC.CardComment
      marginRight={marginRight ? marginRight : false}
      width="100%"
      onSubmit={(e) => handleAddComment(e)}
    >
      <SC.ElementContainer>
        <img src={user?.image} alt="avatar" />
      </SC.ElementContainer>
      <SC.TextArea
        name="textArea"
        value={formValues.textArea}
        onChange={(e) => handleFormValues(e)}
      />
      <SC.ElementContainer>
        <SC.ButtonForm type="submit">{type}</SC.ButtonForm>
      </SC.ElementContainer>
    </SC.CardComment>
  );
};

export default CommentOrReplyForm;
