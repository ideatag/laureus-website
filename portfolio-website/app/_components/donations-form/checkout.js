import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ priceId, quantity, mode }) {
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  if (mode === "payment") {
    await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: priceId, quantity }],
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });
  } else if (mode === "subscription") {
    await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: priceId, quantity }],
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });
  }
}