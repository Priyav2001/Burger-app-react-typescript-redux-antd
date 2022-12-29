import React from "react";
const OrderSummary = (props:any)=> {

  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span> :{" "}
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order Summary</h3>
      <p>Ordered ingredients :</p>
      <ul>{ingredientSummary}</ul>
      {/* <Button type="Success" clicked={props.purchaseSuccess}>
        Proceed to pay{" "} */}
        {/* <Button type="primary" style={{display: 'inline-flex',justifyContent: 'center',alignItems: 'center'}}className="button1" onClick={navigateToForms}> "Confirm the Order!"</Button> */}
        <span style={{ fontWeight: "800" }}>Total Price is: Rs. {props.price.toFixed(2)}</span>
      {/* </Button> */}
      {/* <Button type="Danger" clicked={props.purchaseCancel}>
        Cancel
      </Button> */}
    </>
  );
};

export default OrderSummary;
