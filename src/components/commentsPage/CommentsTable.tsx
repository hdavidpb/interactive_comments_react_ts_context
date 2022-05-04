import React from "react";
import profile1 from "../../assets/interactive-comments-section-main/images/avatars/image-amyrobson.png";
import plus from "../../assets/interactive-comments-section-main/images/icon-plus.svg";
import minus from "../../assets/interactive-comments-section-main/images/icon-minus.svg";
import reply from "../../assets/interactive-comments-section-main/images/icon-reply.svg";
import * as SC from "../styles";

interface IProps {
  marginRight?: boolean;
}

const CommentsTable = ({ marginRight }: IProps) => {
  return (
    <SC.CommentsContainer marginRight={marginRight}>
      <SC.CardComment width="100%">
        <SC.PointsContainer>
          <img src={plus} alt="plus" />
          <span>12</span>
          <img src={minus} alt="minus" />
        </SC.PointsContainer>
        <SC.InfoContainer>
          <SC.HeaderInfo>
            <SC.ProfileContainer>
              <img src={profile1} alt="image.jpg" />
              <h6>amyrobson</h6>
            </SC.ProfileContainer>
            <SC.DateContainer>
              <span>1 month ago</span>
            </SC.DateContainer>
            <SC.ReplyBtnContainer>
              <img src={reply} alt="reply" />
              <h6>Reply</h6>
            </SC.ReplyBtnContainer>
          </SC.HeaderInfo>
          <SC.DescriptionContainer>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepeetur,
            adipisicing elit. Saepeetur, adipisicing elit. Saepeetur,
            adipisicing elit. Saepeetur, adipisicing elit. Saepeetur,
            adipisicing elit. Saepeetur, adipisicing elit. Saepeetur,
            adipisicing elit. Saepe, reiciendis. adipisicing elit. Saepeetur,
            adipisicing elit. Saepeetur, adipisicing elit. Saepe, reiciendis.
            adipisicing elit. Saepeetur, adipisicing elit. Saepeetur,
            adipisicing elit. Saepe, reiciendis. adipisicing elit. Saepeetur,
            adipisicing elit. Saepeetur, adipisicing elit. Saepe, reiciendis.
          </SC.DescriptionContainer>
        </SC.InfoContainer>
      </SC.CardComment>
    </SC.CommentsContainer>
  );
};

export default CommentsTable;
