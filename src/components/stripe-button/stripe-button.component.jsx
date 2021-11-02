import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JccZxDQcdh9wwomEwhMHBqn7F3i4NDpThpzj3Nlfrh7KjBodCyaWhIPhQSoMaoXNIOgp1XPUYQ0QjvGPBPTHNli00bXNRm3Te';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label="Pay now"
            name="Meowear"
            billingAddress
            shippingAddress
            image=''
            description={`Your total is ${price}$`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
            currency="USD"
        />
    )
}

export default StripeCheckoutButton;