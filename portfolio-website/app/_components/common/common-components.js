import { styled } from "styled-components";

export const BackgroundHero = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
`;