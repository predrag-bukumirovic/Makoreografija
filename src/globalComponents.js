import styled from "styled-components";

export const ContainerTitle = styled.div`
  width: 99%;
  margin: 0 auto 100px auto;
  padding: 0;
  border: dashed 3px red;
  font-size: 30px;
  text-align: center;
  animation: lat 1s infinite;

  img {
    width: 100%;
  }

  @keyframes lat {
    0% {
      border: dashed 3px red;
    }
    100% {
      border: dashed 3px #ffd700;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 100;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: var(--title-color);
  @media (max-width: 650px) {
    font-size: 1.8rem;
  }
`;

export const SubTitle = styled.h2`
  color: var(--title-color);
  font-weight: 300;
  margin-top: 50px;
  font-size: 1.5em;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  } ;
`;

export const SubTitle3 = styled.h3`
  color: var(--title-color) !important;
  font-weight: 300;
  font-size: 1.3em;

  @media (max-width: 600px) {
    font-size: 1rem;
  } ;
`;

export const Text = styled.p`
  color: var(--text-color);
  font-size: 18px;
  padding: 0 30px;
  font-weight: 300;
  text-align: start;
`;
