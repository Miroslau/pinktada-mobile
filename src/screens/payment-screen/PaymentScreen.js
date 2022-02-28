import React, { useState, useEffect } from 'react';
import {
  Button, SafeAreaView, View, Text,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  StripeProvider, CardField, useConfirmPayment, useStripe,
} from '@stripe/stripe-react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { paymentIntentAPI, paymentRetrieveAPI } from '../../api/payment/paymentAPI';
import { PaymentScreenStyle } from './PaymentScreenStyle';

const ONE_SECONDS = 1000;
const FIVE_SECONDS = 5;

const StripeTest = ({ price, roomId }) => {
  const stripe = useStripe();
  const startDate = useSelector((state) => state.apartment.startDate);
  const endDate = useSelector((state) => state.apartment.endDate);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [redirectMessage, setRedirectMessage] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(FIVE_SECONDS);
  const redirectToMainScreen = useNavigation();
  const { confirmPayment } = useConfirmPayment();
  const [billingDetails, setBillingDetails] = useState(null);

  const cardChangeHandler = (cardDetails) => {
    setErrorMessage(null);
    setMessage(null);
    setBillingDetails(cardDetails);
  };

  useEffect(() => {
    let interval;
    if (isFirstRender) {
      interval = setInterval(() => {
        setSecondsLeft((prevState) => prevState - 1);
      }, ONE_SECONDS);
    }
    return () => clearInterval(interval);
  }, [isFirstRender]);

  useEffect(() => {
    if (isFirstRender) {
      setRedirectMessage(`You will redirect to main page after (${secondsLeft}) seconds`);
    }
    if (secondsLeft === 0) {
      redirectToMainScreen.navigate('Home');
    }
  }, [secondsLeft, isFirstRender]);

  const handlePayment = async () => {
    const response = await paymentIntentAPI({
      amount: price,
    });

    const clientSecret = response.data;
    const { paymentIntent } = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
    });

    const { data: retrieveIntent } = await paymentRetrieveAPI({
      id: paymentIntent.id,
      roomId,
      dates: {
        startDate,
        endDate,
      },
    });

    if (retrieveIntent.status === 'succeeded') {
      setSecondsLeft(FIVE_SECONDS);
      setIsFirstRender(true);
      setIsSuccess(true);
      setMessage('Payment success');
    } else {
      setRedirectMessage('');
      setMessage('Payment was failed');
    }
    setIsProcessing(false);
  };
  return (
    <View style={PaymentScreenStyle.container}>
      <CardField
        style={PaymentScreenStyle.cardField}
        onCardChange={cardChangeHandler}
        onFocus={cardChangeHandler}
        postalCodeEnabled={false}
      />
      <Button title={`Pay now ${price}$`} onPress={handlePayment} disabled={isProcessing || !stripe || isSuccess} />
      {
        errorMessage && <Text style={PaymentScreenStyle.error}>{errorMessage}</Text>
      }
      {
        message && <Text style={PaymentScreenStyle.error}>{message}</Text>
      }
      {
        redirectMessage && <Text style={PaymentScreenStyle.error}>{redirectMessage}</Text>
      }
    </View>
  );
};

StripeTest.defaultProps = {
  price: null,
  roomId: null,
};

StripeTest.propTypes = {
  price: PropTypes.number,
  roomId: PropTypes.string,
};

const PaymentScreen = ({ route }) => {
  const { params } = route;
  const { _id, totalPrice } = params;

  const PUBLISH_KEY = 'pk_test_51Jzm3XDR674yVRjDquzJMpExIBaI52I5YnjWThcPmElohA8UP5f3Gp6XpdNeJjhK1rycAp8OddRlIvGkFFGR8efd00jObjJywD';

  return (
    <StripeProvider
      publishableKey={PUBLISH_KEY}
      merchantIdentifier="merchant.identifier"
    >
      <SafeAreaView>
        <StripeTest price={totalPrice} roomId={_id} />
      </SafeAreaView>
    </StripeProvider>
  );
};

PaymentScreen.defaultProps = {
  route: null,
};

PaymentScreen.propTypes = {
  route: PropTypes.instanceOf(Object),
};

export default PaymentScreen;
