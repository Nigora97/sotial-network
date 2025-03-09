import styled from "styled-components";
export const ErrorMessage = styled.p`
color: ${(props)=> props.theme.colors.red};
margin: 10px 0;

`
export const SAppInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid ${props => props.theme.colors.bgc};
  background-color: transparent;

  &:last-child {
    margin-bottom: 40px;
  }

  &:is(:hover, :focus) {
    border-color: ${props => props.theme.colors.primeColor};
  }
`;
