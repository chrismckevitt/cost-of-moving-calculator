import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const AgentCommission = ({ state, setState, navigation }) => {
  const handleCommission = (e) => {
    setState({ ...state, agentCommission: e.target.value });
    /* If user is not buying we skip the buying questions */
    if (!state.isBuying) {
      navigation.go("noOfBedrooms");
    } else {
      navigation.go("buyingPrice");
    }
  };

  return (
    <Container>
      <QuestionContainer>
        <h1>Selling agent&apos;s commission</h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value={1}
          onClick={(e) => {
            handleCommission(e);
          }}
        >
          1%
        </Button>
        <Button
          value={1.5}
          onClick={(e) => {
            handleCommission(e);
          }}
        >
          1.5%
        </Button>
        <Button
          value={2}
          onClick={(e) => {
            handleCommission(e);
          }}
        >
          2%
        </Button>
        <Button
          value={2.5}
          onClick={(e) => {
            handleCommission(e);
          }}
        >
          2.5%
        </Button>
      </ButtonContainer>
      <NavContainer>
        <Button
          onClick={() => {
            navigation.go("sellingPrice");
          }}
        >
          Back
        </Button>
        <div>&nbsp;</div>
      </NavContainer>
    </Container>
  );
};

export default AgentCommission;
