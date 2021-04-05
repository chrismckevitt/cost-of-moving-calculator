import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const MoveType = ({ state, setState, navigation }) => {
  const handleMoveType = (e) => {
    setState({ ...state, moveType: e.target.value });
    navigation.go("result");
  };

  const handleBack = () => {
    if (state.isSelling) {
      navigation.go("noOfBedrooms");
    } else if (state.isBuying) {
      if (!state.isFirstTimeBuyer) {
        navigation.go("buyerType2");
      } else {
        navigation.go("buyerType1");
      }
    }
  };

  return (
    <Container>
      <QuestionContainer>
        <h1>How will you be moving:</h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value="DIY"
          onClick={(e) => {
            handleMoveType(e);
          }}
        >
          Doing it myself
        </Button>
        <Button
          value="Hiring a moving company"
          onClick={(e) => {
            handleMoveType(e);
          }}
        >
          Hiring a moving company
        </Button>
      </ButtonContainer>
      <NavContainer>
        <Button
          onClick={() => {
            handleBack();
          }}
        >
          Back
        </Button>
        <div>&nbsp;</div>
      </NavContainer>
    </Container>
  );
};

export default MoveType;
