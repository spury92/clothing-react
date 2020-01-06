import React from 'react';

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_FcD5bR9de7HIpTkmGFhnl67o00fWL0saYd';

    const onToken = token =>{
        console.log(token);
        alert('Successful payment')
    };

    return (
        <StripeCheckout
            label='Pay'
            name='clothing app'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
