import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const BuyerType2 = ({ formData, setForm, navigation }) => {
  const { isOnlyHome } = formData;

  var optionSelected = false;

  return (
    <Container>
      <QuestionContainer>
        <h1>
          Will the purchase of this house result in your owning two or more
          properties:
        </h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value="true"
          onClick={(e) => {
            isOnlyHome = e.target.value;
            optionSelected = true;
            setForm();
          }}
        >
          Yes
        </Button>
        <Button
          value="false"
          onClick={(e) => {
            isOnlyHome = e.target.value;
            optionSelected = true;
            setForm();
          }}
        >
          No
        </Button>
      </ButtonContainer>
      <NavContainer>
        <Button
          onClick={() => {
            navigation.go(3);
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (optionSelected) {
              navigation.go(5);
            }
          }}
        >
          Next
        </Button>
      </NavContainer>
    </Container>
  );
};

export default BuyerType2;
