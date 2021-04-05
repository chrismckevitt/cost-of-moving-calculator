import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const TransactionType = ({ state, setState, navigation }) => {
  useEffect(() => {
    if (state.isBuying && !state.isSelling) {
      navigation.go("buyingPrice");
    } else if (!state.isBuying && state.isSelling) {
      navigation.go("sellingPrice");
    } else if (state.isBuying && state.isSelling) {
      navigation.go("sellingPrice");
    } else {
      return;
    }
  }, [state, navigation]);

  const handleBuying = (e) => {
    setState({ ...state, isBuying: e.target.value});
  };

  const handleSelling = (e) => {
    setState({ ...state, isSelling: e.target.value });
  };

  const handleBuyingAndSelling = (e) => {
    setState({
      ...state,
      isBuying: e.target.value,
      isSelling: e.target.value
    });
  };

  return (
    <Container>
      <QuestionContainer>
        <h1 style={{ textAlign: "center" }}>Are you:</h1>
      </QuestionContainer>
      <ButtonContainer>
        <Button
          value={true}
          onClick={(e) => {
            handleBuying(e);
          }}
        >
          Just buying
        </Button>
        <Button
          value={true}
          onClick={(e) => {
            handleSelling(e);
          }}
        >
          Just selling
        </Button>
        <Button
          value={true}
          onClick={(e) => {
            handleBuyingAndSelling(e);
          }}
        >
          Selling and buying
        </Button>
      </ButtonContainer>
      <NavContainer></NavContainer>
    </Container>
  );
};

export default TransactionType;
