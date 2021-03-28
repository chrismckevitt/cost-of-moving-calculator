import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const BuyingPrice = ({ formData, setForm, navigation }) => {
  const { buyingPrice, isSelling } = formData;

  var optionSelected = false;

  return (
    <Container>
      <QuestionContainer>
        <h1>How much are you buying the house for:</h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value="100000"
          onClick={(e) => {
            buyingPrice = true;
            optionSelected = true;
            setForm();
          }}
        >
          &pound;100,000;
        </Button>
        <Button
          value="200000"
          onClick={(e) => {
            buyingPrice = true;
            optionSelected = true;
            setForm();
          }}
        >
          &pound;300,000
        </Button>
        <Button
          value="500000"
          onClick={(e) => {
            buyingPrice = true;
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
            if (isSelling) {
              navigation.go(1);
            } else {
              navigation.go(0);
            }
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (optionSelected) {
              navigation.go(3);
            }
          }}
        >
          Next
        </Button>
      </NavContainer>
    </Container>
  );
};

export default BuyingPrice;
