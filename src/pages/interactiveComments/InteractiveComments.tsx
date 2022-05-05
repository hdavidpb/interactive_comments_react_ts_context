import { Fragment, useContext } from "react";
import CommentOrReplyForm, {
  formType,
} from "../../components/commentsPage/CommentOrReplyForm";
import CommentsTable from "../../components/commentsPage/CommentsTable";
import Replys from "../../components/commentsPage/Replys";
import { commentsContext } from "../../context/CommentsContext";
import { CommentsTableContainer, ContainerPage } from "./style";

const InteractiveComments = () => {
  const { commentsState } = useContext(commentsContext);
  console.log(commentsState);
  return (
    <ContainerPage>
      <CommentsTableContainer>
        {commentsState.comments.map((comment) => (
          <Fragment key={comment.id}>
            <CommentsTable key={comment.id} comment={comment} />
            {comment.isReplaying && (
              <CommentOrReplyForm type={formType.replyForm} />
            )}

            {comment.replys.map((reply) => (
              <Replys key={reply.id} comment={reply} />
            ))}
          </Fragment>
        ))}
      </CommentsTableContainer>

      <CommentOrReplyForm type={formType.commentFrom} />
    </ContainerPage>
  );
};

export default InteractiveComments;
