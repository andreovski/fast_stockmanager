import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3.5rem 2rem;

  @media (max-width: 700px) {
    padding: 3.5rem 0;
  }
`;

export const HeadContent = styled.div`
  width: 100%;
  padding: 5.5rem 0.63rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 2.25rem;
    font-weight: 500;
    color: var(--gray-700);
  }

  button {
    width: 6.5rem;
    height: 2.5rem;

    font-size: 1.15rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border: none;
    background: var(--gray-700);
    color: var(--white);
    border-radius: 6px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.7);
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1.5rem 2.5rem;
  }
`;

export const PlusIcon = styled(FiPlus)`
  width: 1.75rem;
  height: 1.75rem;
`;

export const Content = styled.div`
  margin: 0.1rem 0.5rem;
`;
