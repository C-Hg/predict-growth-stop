import styled, { Theme } from "styled-components";

import device from "../../styles/medias";

const H1: React.FC = styled.p<{
  color: string;
  theme: Theme;
}>`
  color: ${(props) => props.color || props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.secondary};
  text-align: center;
  font-weight: 600;

  ${device.mobile} {
    font-size: 18px;
    margin: 20px 0 10px 0;
    padding: 0 10px 0 10px;
  }

  ${device.desktop} {
    font-size: 22px;
    margin: 20px 0 20px 0;
    padding: 0 20px 0 20px;
  }
`;

export default H1;
