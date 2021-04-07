import React from "react";
import Button from "react-bootstrap/Button";
import { Container, QuestionContainer, NavContainer } from "../style";

const SellingPrice = ({ state, setState, navigation }) => {
const handleBack = () => {
  
  /* If a user goes back then we need to reset these vars to false else the navigation will be triggered straight away after render */
  setState({...state, isSelling: false, isBuying: false});
  navigation.go("transactionType");
}

  return (
    <Container>
      <QuestionContainer>
        <h1>How much are you selling your house for:</h1>
      </QuestionContainer>
      <label>
        &pound;
        <input
          value={state.sellingPrice}
          onChange={(e) => setState({ ...state, sellingPrice: e.target.value })}
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
            navigation.go("agentCommission");
          }}
        >
          Next
        </Button>
      </NavContainer>
    </Container>
  );
};

export default SellingPrice;
