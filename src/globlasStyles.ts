import styled from "styled-components";

export const theme = {
  primary: {
    ModerateBlue: "hsl(238, 40%, 52%)",
    SoftRed: "hsl(358, 79%, 66%)",
    LightGrayishBlue: "hsl(239, 57%, 85%)",
    PaleRed: "hsl(357, 100%, 86%)",
  },
  neutral: {
    DarkBlue: "hsl(212, 24%, 26%)",
    GrayishBlue: "hsl(211, 10%, 45%)",
    LightGray: "hsl(223, 19%, 93%)",
    VeryLightGray: "hsl(228, 33%, 97%)",
    White: " hsl(0, 0%, 100%)",
  },
};

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.neutral.VeryLightGray};
  overflow-y: auto;
`;
