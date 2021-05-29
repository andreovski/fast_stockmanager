import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

export const Container = styled.div`
  max-width: 1000px;
  padding: 1.25rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: auto;
  margin: 6.5rem 0;
  padding: 1rem 3rem;

  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 6px;

  main {
    margin: 2rem 0;
    display: absolute;

    form header {
      display: flex;
      width: 100%;
      margin-bottom: 2rem;

      align-items: center;
      justify-content: space-between;
      display: flex;

      button {
        height: 2rem;
        padding: 0 1rem;

        font-size: 1.125rem;
        color: var(--white);
        border: 0;
        border-radius: 6px;
        background: var(--primary);
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    form .formContent {
      display: grid;
      gap: 4rem;
      grid-template-columns: 12.5rem 1fr;

      h3 {
        text-align: center;
        margin: 1.5rem 0;
      }

      .formInputs {
        width: 100%;
      }

      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;

        align-items: center;
      }
    }
  }
`;

export const ImageContentInput = styled.div`
  display: flex;
  justify-content: center;

  max-height: 12.5rem;
  max-width: 12.5rem;

  .imageLabel,
  .imageInput {
    display: none;
  }

  button,
  img {
    width: 12.5rem;
    height: 12.5rem;

    border-radius: 6px;
    border: 0;

    font-size: 1.123rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ArrowLeftIcon = styled(FiArrowLeft)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background: var(--gray-100);
  }

  &:active {
    background: var(--gray-200);
  }
`;

export const TagInput = styled.div`
  .react-tag-input {
    padding: 0;
    margin-bottom: 1rem;
    border: 0;
    overflow-y: visible;
  }

  .react-tag-input__input {
    height: 2rem;
    padding: 0 0.5rem;
    margin: 1rem 0;

    border: 1px solid var(--gray-100);
    background: var(--white);
    border-radius: 6px;

    font-size: 1rem;

    &:focus {
      border: 1px solid var(--gray-100);
    }
  }

  .react-tag-input__tag__content {
    font-size: 1.123rem;
  }

  .categoryInput {
    margin: 0 0.5rem 3rem;

    font-size: 1.123rem;
    font-weight: 500;
    color: var(--gray-500);
    text-transform: uppercase;
  }
`;
