'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');

  return (
    <div className="container mx-auto max-w-2xl py-12 text-center">
      <Card>
        <CardHeader className="items-center">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
          <CardTitle className="font-headline text-3xl mt-4">
            Order Placed Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order is being processed.
          </p>
          {orderId && (
            <div className="mt-6 text-lg">
              <p>
                Your Order ID is:{' '}
                <span className="font-semibold text-primary">{orderId}</span>
              </p>
            </div>
          )}
          <Separator className="my-6" />
          <div className="space-y-2 text-muted-foreground">
             <p>An email confirmation has been sent to your email address.</p>
             <p>Expected Delivery Date: <span className="font-medium text-foreground">3-5 business days</span></p>
          </div>
          <Button asChild className="mt-8">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
