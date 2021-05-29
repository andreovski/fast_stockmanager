import styled from "styled-components";
import { FiMaximize2, FiTrash, FiEdit } from "react-icons/fi";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 1rem;

  th {
    padding: 1rem;
    text-align: left;
    text-transform: uppercase;
    font-size: 1.125rem; //18px
    font-weight: 500;
    color: var(--gray-200);
  }

  td {
    height: 100px;
    max-height: 100px;

    padding: 1rem;
    text-align: left;
    background: var(--white);

    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);

    p {
      max-width: 100%;
      white-space: pre;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    img {
      width: auto;
      max-width: 3.75rem;
      height: 3.75rem;
      border-radius: 6px;
      object-fit: cover;
    }

    button {
      border: 0;
      background: 0;
      border-radius: 6px;
      padding: 0.5rem;

      &:hover {
        background: var(--gray-100);
      }
    }

    &:last-child {
      border-right: 1px solid var(--gray-200);
      border-radius: 0 6px 6px 0;

      justify-content: center;
      display: flex;
      align-items: center;
    }

    &.tagsTable {
      span:not(first-child) {
        margin-top: 0.3rem;
      }

      span {
        display: block;
        background: rgba(205, 110, 66, 0.5);
        color: var(--white);
        padding: 0.2rem 0.5rem;
        border-radius: 6px;
      }
    }

    &:nth-child(1) {
      border-left: 1px solid var(--gray-200);
      border-radius: 6px 0 0 6px;
    }

    &:nth-child(2) {
      max-width: 10.5rem;
    }

    &:nth-child(3) {
      max-width: 13rem;
    }

    &:nth-child(4) {
      max-width: 14rem;
    }

    &:nth-child(5) {
      max-width: 8rem;
    }

    &:nth-child(6) {
      max-width: 6rem;
      padding: 0;
    }
  }
`;

export const MaximizeIcon = styled(FiMaximize2)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ResponsiveTable = styled.div`
  @media screen and (max-width: 700px) {
    table {
      border-radius: 6px;
      border: 1px solid var(--gray-200);

      background: var(--white);
      padding: 0 0.8rem;
    }

    thead {
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table td {
      height: auto;
      max-height: auto;
      display: flex;
      gap: 2rem;
      justify-content: space-between;

      border: none;
      border-bottom: 1px solid var(--gray-100);
      background: none;

      p {
        text-align: end;
        max-width: 70%;
        white-space: pre-wrap;
      }

      &:first-child {
        height: 200px;
        max-height: 200px;

        border-left: none;
        border-radius: 0px;
        gap: 0;

        justify-content: center;
        align-items: center;

        img {
          position: relative;
          bottom: 1rem;
          border-radius: 6px;
          max-width: 10.9rem;
          height: 10.9rem;
        }
      }

      &:not(:first-child) {
        max-width: 100vw;
      }

      &:last-child {
        flex-direction: row;
        max-width: 100vw;
        height: 50px;
        padding: 1rem;

        justify-content: center;
        align-items: center;
        border: 0;
        border-radius: 0;

        margin-bottom: 2rem;

        svg {
          position: relative;
          right: 10px;
        }
      }
    }

    table tr td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 1px dashed var(--gray-700);
    }

    table tr:last-child {
      td:last-child {
        border: 0;
      }
    }
  }
`;

export const TrashIcon = styled(FiTrash)`
  width: 1rem;
  height: 1rem;

  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const EditIcon = styled(FiEdit)`
  width: 1rem;
  height: 1rem;

  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;