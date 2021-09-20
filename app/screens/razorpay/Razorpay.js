import React from 'react';
import { Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

import { RAZORPAY_SANDBOX_KEY } from '_Env';
import { ThemedContainer, ThemedBody } from '_Shared/Comps.themed';
import Header from '_Shared/Header';

const Razorpay = () => {
    /* 
        Check test card options here-
        https://razorpay.com/docs/payments/payments/test-card-upi-details/
    */
    const doPayment = () => {
        const options = {
            description: 'Test payment',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: RAZORPAY_SANDBOX_KEY,
            amount: '80000',
            name: 'Jon',
            prefill: {
                email: 'test@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
            },
            theme: { color: '#007ABA' },
        };
        RazorpayCheckout.open(options)
            .then(data => {
                // handle success
                console.log(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
                // handle failure
                console.log(`Error: ${error.code} | ${error.description}`);
            });
    };

    return (
        <ThemedContainer>
            <Header title="Tab2" openDrawer />
            <ThemedBody>
                <Button title="Pay via Razorpay" onPress={() => doPayment()} />
            </ThemedBody>
        </ThemedContainer>
    );
};

export default Razorpay;
