import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const BuyerType2 = ({ state, setState, navigation }) => {
  const handleOnlyHome = (e) => {
    setState({ ...state, isOnlyHome: e.target.value });
    if (!state.isSelling) {
      navigation.go("moveType");
    } else {
      navigation.go("noOfBedrooms");
    }
  };
  const handleNotOnlyHome = (e) => {
    setState({ ...state, hasMoreThanOneHome: e.target.value });
    if (!state.isSelling) {
      navigation.go("moveType");
    } else {
      navigation.go("noOfBedrooms");
    }
  };
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
          value={true}
          onClick={(e) => {
            handleNotOnlyHome(e);
          }}
        >
          Yes
        </Button>
        <Button
          value={true}
          onClick={(e) => {
            handleOnlyHome(e);
          }}
        >
          No
        </Button>
      </ButtonContainer>
      <NavContainer>
        <Button
          onClick={() => {
            navigation.go("buyerType1");
          }}
        >
          Back
        </Button>
        <div>&nbsp;</div>
      </NavContainer>
    </Container>
  );
};

export default BuyerType2;
