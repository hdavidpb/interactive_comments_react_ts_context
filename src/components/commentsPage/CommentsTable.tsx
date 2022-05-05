import React, { useContext } from "react";
import profile1 from "../../assets/interactive-comments-section-main/images/avatars/image-amyrobson.png";
import plus from "../../assets/interactive-comments-section-main/images/icon-plus.svg";
import minus from "../../assets/interactive-comments-section-main/images/icon-minus.svg";
import reply from "../../assets/interactive-comments-section-main/images/icon-reply.svg";
import * as SC from "../styles";
import { IComments } from "../../context/interfaces";
import useCounterPointsComments from "../../hooks/useCounterPointsComments";
import { commentsContext } from "../../context/CommentsContext";

interface IProps {
  marginRight?: boolean;
  comment: IComments;
}

const CommentsTable = ({ marginRight, comment }: IProps) => {
  const { handleDecreasePoints, handleIncreasePoints } =
    useCounterPointsComments({
      pointValue: comment.points,
      isComment: comment.isComment,
      id: comment.id,
    });

  const { handleChangeReply } = useContext(commentsContext);

  return (
    <SC.CommentsContainer marginRight={marginRight}>
      <SC.CardComment width="100%">
        <SC.PointsContainer>
          <img src={plus} alt="plus" onClick={handleIncreasePoints} />
          <span>{comment.points}</span>
          <img src={minus} alt="minus" onClick={handleDecreasePoints} />
        </SC.PointsContainer>
        <SC.InfoContainer>
          <SC.HeaderInfo>
            <SC.ProfileContainer>
              <img src={comment.image} alt="image.jpg" />
              <h6>{comment.user}</h6>
            </SC.ProfileContainer>
            <SC.DateContainer>
              <span>{comment.date}</span>
            </SC.DateContainer>
            <SC.ReplyBtnContainer
              onClick={() => handleChangeReply(comment.id, comment.isComment)}
            >
              <img src={reply} alt="reply" />
              <h6>Reply</h6>
            </SC.ReplyBtnContainer>
          </SC.HeaderInfo>
          <SC.DescriptionContainer
            disabled
            defaultValue={comment.description}
          />
        </SC.InfoContainer>
      </SC.CardComment>
    </SC.CommentsContainer>
  );
};

export default CommentsTable;
