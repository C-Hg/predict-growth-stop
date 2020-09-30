import styled from "styled-components";

const AppContainer: React.FC = styled.div`
  position: absolute;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.colors.yellow};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default AppContainer;
