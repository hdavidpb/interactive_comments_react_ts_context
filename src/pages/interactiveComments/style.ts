import styled from "styled-components";
import { theme } from "../../globlasStyles";

export const ContainerPage = styled.div`
  margin: auto;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  /* gap: 10px; */
`;

export const CommentsTableContainer = styled.div`
  margin: auto;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow-y: auto;
  padding: 6px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.primary.LightGrayishBlue};
    border-radius: 6px;
  }
`;
