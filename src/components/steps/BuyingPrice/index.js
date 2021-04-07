import React from "react";
import Button from "react-bootstrap/Button";
import { Container, QuestionContainer, NavContainer } from "../style";

const BuyingPrice = ({ state, setState, navigation }) => {
  const handleBack = () => {
    if (state.isSelling) {
      navigation.go("agentCommission");
    } else {
      /* Reset isBuying to false so that the navigation isn't automatically triggered on render by the useEffect() on transaction type */
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
             /* If a user is selling a property as well as buying then they are not a first-time buyer so we skip straight to BuyerType2 */
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
