import { useContext } from "react";
import CommentsTable from "../../components/commentsPage/CommentsTable";
import Replys from "../../components/commentsPage/Replys";
import { commentsContext } from "../../context/CommentsContext";
import { ContainerPage } from "./style";

const InteractiveComments = () => {
  const commentsState = useContext(commentsContext);

  return (
    <ContainerPage>
      <CommentsTable />
      <CommentsTable />
      <Replys />
    </ContainerPage>
  );
};

export default InteractiveComments;
