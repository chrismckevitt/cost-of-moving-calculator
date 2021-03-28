import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import {
  TransactionType,
  SellingPrice,
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
  { id: "buyingPrice" },
  { id: "buyerType1" },
  { id: "buyerType2" },
  { id: "noOfBedrooms" },
  { id: "moveType" },
  { id: "result" },
];

const CostOfMovingCalculator = () => {
  let [formData, setForm] = useForm({
    isSelling: false,
    isBuying: false,
    isFirstTimeBuyer: false,
    isOnlyHome: false,
    moveType: '',
    sellingPrice: '',
    buyingPrice: '',
    numberOfBedrooms: '',
  });
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "transactionType":
      return <TransactionType {...props} />;
    case "sellingPrice":
      return <SellingPrice {...props} />;
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
  }

  return (
    <div>
      <h1>Cost of moving calculator</h1>
    </div>
  );
};

export default CostOfMovingCalculator;
