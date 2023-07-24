import { Grid } from "@mui/material";
import styled from "styled-components";

export const AppWrapper = styled(Grid)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray4};
`;
