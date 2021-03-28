import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const MoveType = ({ formData, setForm, navigation }) => {
  const { moveType } = formData;

  var optionSelected = false;

  return (
    <Container>
      <QuestionContainer>
        <h1>
          How will you be moving:
        </h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value="DIY"
          onClick={(e) => {
            moveType = true;
            optionSelected = true;
            setForm();
          }}
        >
          Doing it myself
        </Button>
        <Button
          value="Hiring a moving company"
          onClick={(e) => {
            moveType = true;
            optionSelected = true;
            setForm();
          }}
        >
          Hiring a moving company
        </Button>
        
      </ButtonContainer>
      <NavContainer>
        <Button
          onClick={() => {
            navigation.go(5)
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (optionSelected) {
              navigation.go(7);
            }
          }}
        >
          Next
        </Button>
      </NavContainer>
    </Container>
  );
};

export default MoveType;
