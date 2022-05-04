import styled from "styled-components";
import { theme } from "../globlasStyles";

interface IProps {
  width?: "100%" | "90%";
  marginRight?: boolean;
}

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  flex: 1;
  overflow-y: auto;
  margin-right: ${({ marginRight }: IProps) => (marginRight ? "-12%" : "")};
`;

export const CardComment = styled.div`
  width: ${({ width }: IProps) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 12px;
  border-radius: 6px;
  background: #ffffff;
`;

export const PointsContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${theme.neutral.VeryLightGray};
  padding: 6px;

  & span {
    font-size: 1rem;
    color: ${theme.primary.ModerateBlue};
    font-weight: 900;
  }
  img {
    width: 12px;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 8px;
`;

export const HeaderInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const ProfileContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  & h6 {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

export const DateContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & span {
    font-size: 0.7rem;
    color: gray;
  }
`;

export const ReplyBtnContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  & img {
    width: 15px;
    height: 15px;
  }

  & h6 {
    font-size: 0.9rem;
    color: ${theme.primary.ModerateBlue};
    font-weight: 900;
  }
`;

export const DescriptionContainer = styled.p`
  width: 100%;
  height: 100px;
  word-break: break-word;
  overflow-y: auto;
  color: ${theme.neutral.GrayishBlue};
  font-size: 0.9rem;
  text-align: left;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.neutral.LightGray};
    border-radius: 6px;
  }
`;

/**************** REPLYS  **********************/

export const ReplysContainer = styled.div`
  width: ${({ width }: IProps) => width};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-left: solid 4px ${theme.neutral.LightGray};
`;
