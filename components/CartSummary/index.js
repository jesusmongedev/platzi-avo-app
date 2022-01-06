import React from "react";

const CartSummary = ({ totalAmount }) => {
  return (
    <div>
      <p>The total amount is {totalAmount}</p>
    </div>
  );
};

export default CartSummary;
