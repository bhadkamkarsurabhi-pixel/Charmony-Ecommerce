import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(req: NextRequest) {
  try {
    const { amount, payment_method_type, currency } = await req.json();

    if (payment_method_type === 'card') {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: currency || 'usd',
        payment_method_types: ['card'],
      });

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
      });
    }

    return NextResponse.json({ error: 'Unsupported payment method' }, { status: 400 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
