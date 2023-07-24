import { Grid } from "@mui/material";
import styled from "styled-components";

export const ListContainerWrapper = styled(Grid)`
  width: 70rem;
  height: 40rem;
  padding: 2rem 3rem 2rem 1.5rem;
  background-color: ${(props) => props.theme.colors.white};
`;

export const UtilitiesWrapper = styled(Grid)`
  width: 100%;
  height: auto;
  display: flex;
`;

export const UtilitiesInputWrapper = styled(Grid)``;

export const UtilitiesButtonWrapper = styled(Grid)``;
