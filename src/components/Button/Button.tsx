import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  color: red;
  background:black;
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 10%;
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 300px;
  hover:pointer
`;

function App() {
    return (
        <div>
            <Button> Normal Button </Button>
        </div>
    );
}

