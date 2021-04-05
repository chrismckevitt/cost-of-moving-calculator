import React from "react";
import Button from "react-bootstrap/Button";

import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const Result = ({ state, navigation, setState }) => {
  const typeOfBuyer = () => {
    if (state.isFirstTimeBuyer) {
      return <li>Is a first time buyer</li>;
    } else if (state.isOnlyHome) {
      return <li>Will be only home</li>;
    } else {
      return <li>Will result in owning more than one property</li>;
    }
  };

  const handleBack = () => {
    setState({
      isSelling: false,
      isBuying: false,
      isFirstTimeBuyer: false,
      isNotFirstTimeBuyer: false,
      isOnlyHome: false,
      moveType: "",
      sellingPrice: 0,
      buyingPrice: 0,
      numberOfBedrooms: 0,
      agentComission: 0,
    });
    navigation.go("transactionType");
  };

  return (
    <Container>
      <QuestionContainer>
        <h1>Cost of moving details</h1>
      </QuestionContainer>
      <ButtonContainer>
        <h4>User is:</h4>
        <ul>
          {state.isSelling && !state.isBuying && (
            <>
              <li>Just selling</li>
              <li>{`Selling for ${state.sellingPrice} with an agent commission of ${state.agentCommission}%`}</li>
            </>
          )}
          {!state.isSelling && state.isBuying && (
            <>
              <li>Just buying</li>
              <li>{`Buying for ${state.buyingPrice}`}</li>
            </>
          )}
          {state.isSelling && state.isBuying && (
            <>
              <li>Selling and buying</li>
              <li>{`Selling for ${state.sellingPrice} with an agent commission of ${state.agentCommission}% and buying for ${state.buyingPrice}`}</li>
            </>
          )}
          {state.isBuying && typeOfBuyer()}
          {state.isSelling && (
            <li>{`Property being sold has ${state.numberOfBedrooms} bedrooms`}</li>
          )}
          {state.moveType === "DIY" ? (
            <li>Will be moving everything themselves</li>
          ) : (
            <li>Will be hiring a company to help them move</li>
          )}
        </ul>
      </ButtonContainer>
      <NavContainer>
        <div>&nbsp;</div>
        <Button
          onClick={() => {
            handleBack();
          }}
        >
          Restart
        </Button>
      </NavContainer>
    </Container>
  );
};

export default Result;
