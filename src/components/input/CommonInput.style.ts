import { Input, Typography } from "@mui/material";
import styled from "styled-components";

interface InputProps {
  error?: boolean;
}

export const InputWrapper = styled(Input)<InputProps>`
  && {
    width: 100%;
    background-color: inherit !important;
    font-size: ${(props) => props.theme.fontSize.fz14};
    padding: 1.1rem 0.8rem 1.1rem 0.8rem;
    height: 4.3rem;
    outline: none;
    border-radius: ${(props) => props.theme.borders.borderRadius0_5};
    border: 0.5rem solid
      ${(props) =>
        props.error ? props.theme.colors.danger : props.theme.colors.gray3};
    &:after,
    &:before {
      content: none;
    }

    & input {
      color: ${(props) =>
        props.error ? props.theme.colors.danger : props.theme.colors.black};
      background-color: inherit !important;
      outline: none;

      &:autofill {
        box-shadow: 0 0 0px 1000px inherit inset;
      }
    }
  }
`;

export const ErrorWrapper = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.danger};
    ${(props) => props.theme.fontSize.fz1_4};
  }
`;
