import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin: 0 0.5rem 0.5rem;

    font-size: 1.123rem;
    font-weight: 500;
    color: var(--gray-500);
    text-transform: uppercase;
  }

  input {
    height: 2rem;
    padding: 0 0.5rem;
    margin-bottom: 1rem;

    border: 1px solid var(--gray-100);
    background: var(--white);
    border-radius: 6px;

    font-size: 1.123rem;

    &:disabled {
      border: 0;
      background: var(--gray-50);
    }
  }

  textarea {
    width: 100%;
    padding: 0.5rem 0.5rem;

    border: 1px solid var(--gray-100);
    background: var(--white);
    border-radius: 6px;

    font-size: 1.123rem;
    resize: vertical;

    &:disabled {
      border: 0;
      background: var(--gray-50);
    }
  }

  span {
    margin: -0.7rem 0 1rem 0.5rem;
    font-size: 0.9rem;

    color: var(--red);
  }

  p {
    color: var(--gray-100);
    margin: 0 0 0.5rem 0.5rem;
  }
`;

export const Separetor = styled.div`
  margin-bottom: 1rem;
`;

export const MessageError = styled.span``;
