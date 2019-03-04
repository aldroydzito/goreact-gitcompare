import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 12px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(odd) {
        background: #f5f5f5;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.65rem;

  button {
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: 0;
    border-radius: 3px;
    padding: 8px 12px;

    i {
      margin-right: 0.5rem;
    }

    &.success {
      background: #1dd1a1;

      &:hover {
        background: #10ac84;
      }
    }

    &.danger {
      background: #ff6b6b;
      &:hover {
        background: #ee5253;
      }
    }
  }
`;
