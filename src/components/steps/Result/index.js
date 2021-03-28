import React from "react";
import Button from "react-bootstrap/Button";

import {
  Container,
  QuestionContainer,
  ButtonContainer,
  NavContainer,
} from "../style";

const Result = ({ formData, navigation }) => {
  const {
    isSelling,
    isBuying,
    isFirstTimeBuyer,
    isOnlyHome,
    moveType,
    sellingPrice,
    buyingPrice,
    numberOfBedrooms,
  } = formData;

  return (
    <Container>
      <QuestionContainer>
        <h1>Cost of moving details</h1>
      </QuestionContainer>
      <ButtonContainer>
        <ul>
          {isSelling && !isBuying && (
            <>
              <li>Just selling</li>
              <li>{`Selling for ${sellingPrice}`}</li>
            </>
          )}
          {!isSelling && isBuying && (
            <>
              <li>Just buying</li>
              <li>{`Buying for ${buyingPrice}`}</li>
            </>
          )}
          {isSelling && isBuying && (
            <>
              <li>Selling and buying</li>
              <li>{`Selling for ${sellingPrice} and buying for ${buyingPrice}`}</li>
            </>
          )}
          {isBuying && isFirstTimeBuyer && <li>Is a first time buyer</li>}
          {isBuying && isOnlyHome ? (
            <li>Will be only home</li>
          ) : (
            <li>Will result in owning more than one property</li>
          )}
          {isBuying && <li>{`Property being purchased has ${numberOfBedrooms} bedrooms`}</li>}
          {moveType === "DIY" ? <li>I will be moving my thingd myself</li> : <li>I will be hiring a company to help me move</li>}
        </ul>
      </ButtonContainer>
      <NavContainer>
        <div>&nbsp;</div>
        <Button
          onClick={() => {
            navigation.go(0)
          }}
        >
          Next
        </Button>
      </NavContainer>
    </Container>
  );
};

export default Result;
