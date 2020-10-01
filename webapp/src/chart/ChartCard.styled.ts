import styled from "styled-components";

import { CARD_BORDER_RADIUS, CARD_WIDTH } from "../styles/constants";
import device from "../styles/medias";
import theme from "../styles/theme";

const ChartCard: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: safe center;
  justify-content: safe center;

  background-color: ${(props) => props.theme.backgroundColors.card};
  margin: 10px auto 30px auto;

  box-shadow: 0px 0px 10px ${theme.colors.lightestGrey};
  border-radius: ${CARD_BORDER_RADIUS};
  border: 1px solid ${theme.colors.lightestGrey};
  width: ${CARD_WIDTH};

  ${device.mobile} {
    padding-bottom: 15px;
    padding-top: 15px;
  }

  ${device.desktop} {
    padding-bottom: 20px;
    padding-top: 30px;
  }
`;

export default ChartCard;
