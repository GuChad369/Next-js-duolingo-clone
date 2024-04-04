
import Stripe from "stripe"; // npm i stripe


// stripe.com
// for payment 
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});
