import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const NoOfBedrooms = ({ state, setState, navigation }) => {
  const handleBack = () => {
    if (state.isBuying) {
      if (state.isFirstTimeBuyer) {
        /* Reset vars to false so as not to trigger navigate() immediately after render in the useEffect() on BuyerType1. */
        setState({ ...state, isFirstTimeBuyer: false, isNotFirstTimeBuyer: false });
        navigation.go("buyerType1");
      } else {
        setState({...state, isOnlyHome: false, hasMoreThanOneHome: false})
        navigation.go("buyerType2");
      }
    } else {
      navigation.go("agentCommission");
    }
  };

  const handleNumberOfBedrooms = (e) => {
    setState({ ...state, numberOfBedrooms: e.target.value });
    navigation.go('moveType')
  };
  return (
    <Container>
      <QuestionContainer>
        <h1>How many bedrooms does the property you&apos;re selling have:</h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value={1}
          onClick={(e) => {
            handleNumberOfBedrooms(e);
          }}
        >
          1
        </Button>
        <Button
          value={2}
          onClick={(e) => {
            handleNumberOfBedrooms(e);
          }}
        >
          2
        </Button>
        <Button
          value={3}
          onClick={(e) => {
            handleNumberOfBedrooms(e);
          }}
        >
          3
        </Button>
        <Button
          value={4}
          onClick={(e) => {
            handleNumberOfBedrooms(e);
          }}
        >
          4
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

export default NoOfBedrooms;
