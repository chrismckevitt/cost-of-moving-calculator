import React, { useState } from "react";
import { useStep } from "react-hooks-helper";

import {
  TransactionType,
  SellingPrice,
  AgentCommission,
  BuyingPrice,
  BuyerType1,
  BuyerType2,
  MoveType,
  NoOfBedrooms,
  Result,
} from "./steps";

const steps = [
  { id: "transactionType" },
  { id: "sellingPrice" },
  { id: "agentCommission" },
  { id: "buyingPrice" },
  { id: "buyerType1" },
  { id: "buyerType2" },
  { id: "noOfBedrooms" },
  { id: "moveType" },
  { id: "result" },
];

const CostOfMovingCalculator = () => {
  const [state, setState] = useState({
    isSelling: false,
    isBuying: false,
    isFirstTimeBuyer: false,
    isNotFirstTimeBuyer: false,
    isOnlyHome: false,
    hasMoreThanOneHome: false,
    moveType: "",
    sellingPrice: 0,
    buyingPrice: 0,
    numberOfBedrooms: 0,
    agentComission: 0,
  });

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = {
    state,
    setState,
    navigation,
  };

  switch (step.id) {
    case "transactionType":
      return <TransactionType {...props} />;
    case "sellingPrice":
      return <SellingPrice {...props} />;
    case "agentCommission":
      return <AgentCommission {...props} />;
    case "buyingPrice":
      return <BuyingPrice {...props} />;
    case "buyerType1":
      return <BuyerType1 {...props} />;
    case "buyerType2":
      return <BuyerType2 {...props} />;
    case "noOfBedrooms":
      return <NoOfBedrooms {...props} />;
    case "moveType":
      return <MoveType {...props} />;
    case "result":
      return <Result {...props} />;
    default:
      return (
        <div>
          <h1>Cost of moving calculator</h1>
        </div>
      );
  }
};

export default CostOfMovingCalculator;
