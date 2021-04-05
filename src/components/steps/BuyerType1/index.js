import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const BuyerType1 = ({ state, setState, navigation }) => {
  const handleFirstTimeBuyer = (e) => {
    setState({ ...state, isFirstTimeBuyer: e.target.value });
  };
  const handleNotFirstTimeBuyer = (e) => {
    setState({ ...state, isNotFirstTimeBuyer: e.target.value });
  };
  useEffect(() => {
    if (state.isFirstTimeBuyer) {
      navigation.go("noOfBedrooms");
    } else if (state.isNotFirstTimeBuyer) {
      navigation.go("buyerType2");
    } else return;
  }, [state, navigation]);
  return (
    <Container>
      <QuestionContainer>
        <h1>
          Are you, and anyone you&apos;re purchasing with, first-time buyers:
        </h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value={true}
          onClick={(e) => {
            handleFirstTimeBuyer(e);
          }}
        >
          Yes
        </Button>
        <Button
        value={true}
          onClick={(e) => {
            handleNotFirstTimeBuyer(e);
          }}
        >
          No
        </Button>
      </ButtonContainer>
      <NavContainer>
        <Button
          onClick={() => {
            navigation.go("buyingPrice");
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (!state.isSelling && state.isFirstTimeBuyer) {
              navigation.go("moveType");
            } else if (!state.isFirstTimeBuyer) {
              navigation.go("buyerType2");
            } else if (state.isSelling && state.isFirstTimeBuyer) {
              navigation.go("noOfBedrooms");
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
