/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

const stripe = Stripe(
  "pk_test_51Pax3rAoakjzY2FzSD7kzCY9aPGfCuXDWjoTVwUmKbfsdG4jOGcnCOL6FRBNJStpJchadn7nZLXFxWDb52gj6c0V00AI3f9Rgd"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/booking/checkout-session/${tourId}`
    );

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert("error", err);
  }
};
