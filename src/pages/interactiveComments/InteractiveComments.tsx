import { useContext } from "react";
import { commentsContext } from "../../context/CommentsContext";

const InteractiveComments = () => {
  const commentsState = useContext(commentsContext);

  return (
    <div>
      <h1>InteractiveComments</h1>
      <p>
        {commentsState.comments.map((comment) => (
          <p key={comment.id}>{comment.user}</p>
        ))}
      </p>
    </div>
  );
};

export default InteractiveComments;
