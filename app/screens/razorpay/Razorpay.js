import React from 'react';
import { Button } from 'react-native';
import Config from 'react-native-config';
import RazorpayCheckout from 'react-native-razorpay';

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
            key: Config.RAZORPAY_KEY,
            amount: 100,
            name: 'Jon',
            prefill: {
                email: 'test@razorpay.com',
                contact: '9814110843',
                name: 'Razorpay Software',
            },
            theme: { color: '#007ABA' },
        };
        RazorpayCheckout.open(options)
            .then(data => {
                // handle success
                /* Data of the form-
                {
                    "checkout_logo": "https://cdn.razorpay.com/logo.png", 
                    "org_logo": "", 
                    "org_name": "Razorpay Software Private Ltd", 
                    "razorpay_payment_id": "pay_HzqD9NnvCU0jYD"
                }  
                */
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
