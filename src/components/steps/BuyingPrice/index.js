import React from "react";
import Button from "react-bootstrap/Button";
import { Container, QuestionContainer, NavContainer } from "../style";

const BuyingPrice = ({ state, setState, navigation }) => {
  const handleBack = () => {
    if (state.isSelling) {
      navigation.go("agentCommission");
    } else {
      setState({...state, isBuying: false})
      navigation.go(0);
    }
  }
  return (
    <Container>
      <QuestionContainer>
        <h1>How much are you buying your new house for:</h1>
      </QuestionContainer>
      <label>
        &pound;
        <input
          value={state.buyingPrice}
          onChange={(e) => setState({ ...state, buyingPrice: e.target.value })}
        />
      </label>

      <NavContainer>
        <Button
          onClick={() => {
            handleBack();
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (state.isSelling) {
              navigation.go("buyerType2");
            } else {
              navigation.go("buyerType1");
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
