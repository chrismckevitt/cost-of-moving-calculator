import React from "react";
import Button from "react-bootstrap/Button";
import { Container, QuestionContainer, ButtonContainer, NavContainer } from "../style";

const SellingPrice = ({ formData, setForm, navigation }) => {
  const { sellingPrice, isBuying } = formData;

  var optionSelected = false;

  return (
    <Container>
        <QuestionContainer>
        <h1>How much are you selling your house for:</h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value="100000"
          onClick={(e) => {
            sellingPrice = true;
            optionSelected = true;
            setForm();
          }}
        >
          &pound;100,000;
        </Button>
        <Button
          value="200000"
          onClick={(e) => {
            sellingPrice = true;
            optionSelected = true;
            setForm();
          }}
        >
          &pound;300,000
        </Button>
        <Button
          value="500000"
          onClick={(e) => {
            sellingPrice = true;
            optionSelected = true;
            setForm();
          }}
        >
          &pound;500,000
        </Button>
      </ButtonContainer>
      <NavContainer>
        <Button
          onClick={() => {
            navigation.previous();
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (optionSelected) {
              if (isBuying) {
                navigation.go(2);
              } else {
                navigation.go(3);
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

export default SellingPrice;
