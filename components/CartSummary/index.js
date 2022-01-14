import React from "react";
import { Segment, Button } from "semantic-ui-react";

const CartSummary = ({ totalAmount }) => {
  return (
    <Segment
      style={{
        // verticalAlign: "middle",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      size="large"
      as="section"
    >
      <span>
        <strong>Sub total:</strong>
        {` ${totalAmount}`}
      </span>
      <Button color="black">Check out</Button>
    </Segment>
  );
};

export default CartSummary;
