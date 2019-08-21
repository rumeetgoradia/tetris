import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  // margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #333;
  color: #ccc;
  background: #333;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: all .4s ease-in-out;
  font-family: 'Heebo', sans-serif;
  font-weight: 100;

  :hover {
    box-shadow: 0 5px 15px 0px rgba(27, 27, 27, 0.65);
    color: #333;
    background: #ccc;
    // font-weight: 400;
  }
`;
