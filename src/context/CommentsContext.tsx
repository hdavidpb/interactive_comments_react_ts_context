import React, { createContext, useEffect, useState } from "react";
import { IComments, IContextState, IPropsCommentsContext } from "./interfaces";
import avatar from "../assets/interactive-comments-section-main/images/avatars/image-maxblagun.png";
const initialState: IContextState = {
  comments: [],
};

export interface IContextValues {
  commentsState: IContextState;
  replyID: number;
  handleAddNewComment: (comment: IComments) => void;
  handleChangePoints: (
    pointValue: number,
    commentId: number,
    isComment: boolean
  ) => void;
  handleChangeReply: (commentId: number, isComment: boolean) => void;
  handleAddNewReply: (newReplycomment: IComments, replyId: number) => void;
}

const contextValues: IContextValues = {
  commentsState: { comments: [] },
  replyID: 0,
  handleAddNewComment: (comment: IComments) => {},
  handleChangePoints: (
    pointValue: number,
    commentId: number,
    isComment: boolean
  ) => {},
  handleChangeReply: (commentId: number, isComment: boolean) => {},
  handleAddNewReply: (newReplycomment: IComments, replyId: number) => {},
};

export const commentsContext = createContext(contextValues);

const CommentsContext = ({ children }: IPropsCommentsContext) => {
  const [replyID, setReplyID] = useState<number>(0);
  const [commentsState, setCommentsState] = useState<IContextState>({
    comments: [],
  });

  useEffect(() => {
    console.log("CAMBIO EL ARRAY: ", commentsState.comments);
  }, [commentsState.comments]);

  const handleAddNewComment = (comment: IComments) => {
    setCommentsState({
      comments: [...commentsState!.comments, comment],
    });
  };

  const handleAddNewReply = (newReplycomment: IComments, id: number) => {
    setCommentsState((prev) => {
      console.log("ENTRE AQUI!!!");
      prev.comments.forEach((comment) => {
        if (comment.id === id) {
          console.log(comment);
          comment.replys = [...comment.replys, newReplycomment];
          comment.isReplaying = false;
        }
      });

      return { ...prev };
    });

    setCommentsState((prev) => {
      prev.comments.forEach((comment) => {
        comment.replys.forEach((reply) => {
          if (reply.id === id) {
            comment.replys = [...comment.replys, newReplycomment];
            reply.isReplaying = false;
          }
        });
      });

      return { ...prev };
    });
    setReplyID(0);
  };

  const handleChangePoints = (
    pointValue: number,
    commentId: number,
    isComment: boolean
  ) => {
    if (isComment) {
      commentsState.comments.forEach((comment) => {
        if (comment.id === commentId) {
          comment.points = pointValue;
        }
      });
    } else {
      commentsState.comments.forEach((comment) => {
        comment.replys.forEach((reply) => {
          if (reply.id === commentId) {
            reply.points = pointValue;
          }
        });
      });
    }
  };

  const handleChangeReply = (commentId: number, isComment: boolean) => {
    if (isComment) {
      setReplyID(commentId);
      setCommentsState((prev) => {
        prev.comments.forEach((comment) => {
          if (comment.id === commentId) {
            comment.isReplaying = !comment.isReplaying;
          }
        });

        return { ...prev };
      });
    } else {
      setReplyID(commentId);
      setCommentsState((prev) => {
        console.log("ENTRO AQUI");
        prev.comments.forEach((comment) => {
          comment.replys.forEach((reply) => {
            if (reply.id === commentId) {
              reply.isReplaying = !reply.isReplaying;
            }
          });
        });

        return { ...prev };
      });
    }
  };

  return (
    <commentsContext.Provider
      value={{
        commentsState,
        replyID,
        handleAddNewComment,
        handleChangePoints,
        handleChangeReply,
        handleAddNewReply,
      }}
    >
      {children}
    </commentsContext.Provider>
  );
};

export default CommentsContext;
