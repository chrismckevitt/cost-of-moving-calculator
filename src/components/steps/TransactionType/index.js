import React from "react";
import Button from "react-bootstrap/Button";
import { Container, QuestionContainer, ButtonContainer, NavContainer } from "../style";

const TransactionType = ({ formData, setForm, navigation }) => {
  const { isBuying, isSelling } = formData;

  var optionSelected = false;

  return (
    <Container>
      <QuestionContainer>
        <h1 style={{textAlign: "center"}}>Are you:</h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value={true}
          onClick={(e) => {
            isBuying = e.target.value;
            optionSelected = true;
            setForm();
          }}
        >
          Just buying
        </Button>
        <Button
          value={true}
          onClick={(e) => {
            isSelling = e.target.value;
            optionSelected = true;
            setForm();
          }}
        >
          Just selling
        </Button>
        <Button
          value={true}
          onClick={(e) => {
            isBuying = e.target.value;
            isSelling = true;
            optionSelected = true;
            setForm();
          }}
        >
          Selling and buying
        </Button>
      </ButtonContainer>
      <NavContainer>
        <div>&nbsp;</div>
        <Button
          onClick={() => {
            if (optionSelected) {
              if (isBuying && !isSelling) {
                navigation.go(2);
              } else if (!isBuying && isSelling) {
                navigation.go(1);
              } else if (isBuying && isSelling) {
                navigation.go(1);
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

export default TransactionType;
