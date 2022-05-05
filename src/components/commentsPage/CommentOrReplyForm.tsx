import avatar from "../../assets/interactive-comments-section-main/images/avatars/image-maxblagun.png";
import * as SC from "../styles";

export enum formType {
  replyForm = "REPLY",
  commentFrom = "SEND",
}

interface IProps {
  type: formType;
}

const CommentOrReplyForm = ({ type }: IProps) => {
  return (
    <SC.CardComment width="100%">
      <SC.ElementContainer>
        <img src={avatar} alt="avatar" />
      </SC.ElementContainer>
      <SC.TextArea>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
        veritatis?
      </SC.TextArea>
      <SC.ElementContainer>
        <SC.ButtonForm>{type}</SC.ButtonForm>
      </SC.ElementContainer>
    </SC.CardComment>
  );
};

export default CommentOrReplyForm;
