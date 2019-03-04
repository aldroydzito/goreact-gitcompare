import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 56px;
    padding: 0 24px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${({ withError }) => (withError ? '2px solid #f00' : '0px solid transparent')};

    transition: border 0.5s ease-out;
  }
  button {
    width: 80px;
    height: 56px;
    padding: 0 24px;
    margin-left: 12px;
    background: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;
