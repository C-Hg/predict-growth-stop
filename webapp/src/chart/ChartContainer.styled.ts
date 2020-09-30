import styled from "styled-components";

import device from "../styles/medias";

const ChartContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: safe center;
  justify-content: safe center;
  margin: 10px auto 30px auto;

  background-color: ${(props) => props.theme.backgroundColors.card};

  ${device.mobile} {
    width: 100%;
  }

  ${device.desktop} {
    width: 90%;
  }
`;

export default ChartContainer;
