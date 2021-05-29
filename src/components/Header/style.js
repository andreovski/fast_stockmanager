import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--white);

  img {
    @media (max-width: 600px) {
      width: auto;
      height: auto;

      max-width: 200px;
    }
  }
`;
