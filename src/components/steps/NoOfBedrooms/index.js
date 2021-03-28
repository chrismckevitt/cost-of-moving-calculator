import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const NoOfBedrooms = ({ formData, setForm, navigation }) => {
  const { numberOfBedrooms, isFirstTimeBuyer } = formData;

  var optionSelected = false;

  return (
    <Container>
      <QuestionContainer>
        <h1>
          How many bedrooms does the property you&apos;re purchasing have:
        </h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value="1"
          onClick={(e) => {
            numberOfBedrooms = true;
            optionSelected = true;
            setForm();
          }}
        >
          1
        </Button>
        <Button
          value="2"
          onClick={(e) => {
            numberOfBedrooms = true;
            optionSelected = true;
            setForm();
          }}
        >
          2
        </Button>
        <Button
          value="3"
          onClick={(e) => {
            numberOfBedrooms = true;
            optionSelected = true;
            setForm();
          }}
        >
          3
        </Button>
      </ButtonContainer>
      <NavContainer>
        <Button
          onClick={() => {
            if (isFirstTimeBuyer) {
                navigation.go(3)
            } else {
              navigation.go(4);
            }
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (optionSelected) {
              navigation.go(6);
            }
          }}
        >
          Next
        </Button>
      </NavContainer>
    </Container>
  );
};

export default NoOfBedrooms;
