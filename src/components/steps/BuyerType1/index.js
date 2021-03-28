import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const BuyerType1 = ({ formData, setForm, navigation }) => {
  const { isFirstTimeBuyer, isBuying } = formData;

  var optionSelected = false;

  return (
    <Container>
      <QuestionContainer>
        <h1>Are you, and anyone you&apos;re purchasing with, first-time buyers:</h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value="true"
          onClick={(e) => {
            isFirstTimeBuyer = e.target.value;
            optionSelected = true;
            setForm();
          }}
        >
          Yes
        </Button>
        <Button
          value="false"
          onClick={(e) => {
            isFirstTimeBuyer = e.target.value;
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
            if (isBuying) {
              navigation.go(2);
            } else {
              navigation.go(1);
            }
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (optionSelected) {
                if (isFirstTimeBuyer) {
                    navigation.go(5)
                } else {
                    navigation.go(4)
                }
              
            }
          }}
        >
          Next
        </Button>
      </NavContainer>
    </Container>
  );
};

export default BuyerType1;
