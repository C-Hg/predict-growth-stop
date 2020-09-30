import styled from "styled-components";

import device from "./styles/medias";

const ContentContainer: React.FC = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.backgroundColors.main};
  height: 100%;

  ${device.mobile} {
    width: 100vw;
    max-width: 100vw;
  }

  ${device.desktop} {
    width: 922px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default ContentContainer;
