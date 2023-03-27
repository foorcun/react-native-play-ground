import { View } from "react-native";
// import styled from "styled-components"; // bunu import etme
import styled from "styled-components/native"; // bunu import et

const defaultViewStyles = (theme) => `
background-color: ${theme.primary};
`;

// backgroundColor: ${theme.primary};

export const CustomView = styled(View)`
  ${({ theme }) => defaultViewStyles(theme)};
`;
// background-color: black;

// export const CustomView = styled(View)`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(255, 255, 100, 0.3);
// `;
