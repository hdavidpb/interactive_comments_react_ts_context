import { useContext } from "react";
import CommentOrReplyForm, {
  formType,
} from "../../components/commentsPage/CommentOrReplyForm";
import CommentsTable from "../../components/commentsPage/CommentsTable";
import Replys from "../../components/commentsPage/Replys";
import { commentsContext } from "../../context/CommentsContext";
import { ContainerPage } from "./style";

const InteractiveComments = () => {
  const commentsState = useContext(commentsContext);

  return (
    <ContainerPage>
      <CommentsTable />
      <CommentOrReplyForm type={formType.replyForm} />
      <CommentsTable />
      <Replys />
      <CommentOrReplyForm type={formType.commentFrom} />
    </ContainerPage>
  );
};

export default InteractiveComments;
