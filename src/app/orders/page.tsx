'use client';

// This is a placeholder for the orders page.
// In a real application, you would fetch the user's order history.

import Link from 'next/link';
import { ShoppingBag, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const mockOrders = [
  {
    id: 'ORD-2023-001',
    date: 'October 20, 2023',
    status: 'Delivered',
    total: 145.5,
    items: [
      { name: 'Lumina Glow Serum', quantity: 1 },
      { name: 'Revive Clay Mask', quantity: 1 },
    ],
  },
  {
    id: 'ORD-2023-002',
    date: 'October 28, 2023',
    status: 'Shipped',
    total: 84.0,
    items: [{ name: 'Ethereal Mist', quantity: 1 }],
  },
    {
    id: 'ORD-2023-003',
    date: 'November 5, 2023',
    status: 'Processing',
    total: 66.0,
    items: [
        { name: 'Silk-Feather Shampoo', quantity: 1 },
        { name: 'Velvet-Touch Conditioner', quantity: 1 },
    ],
  },
];

export default function OrdersPage() {
  const orders = mockOrders; // In a real app, this would be fetched data

  if (orders.length === 0) {
    return (
      <div className="container mx-auto max-w-4xl py-12 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-4 font-headline text-3xl font-semibold">
          You have no orders yet
        </h1>
        <p className="mt-2 text-muted-foreground">
          All your future orders will appear here.
        </p>
        <Button asChild className="mt-6">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-semibold tracking-tight text-foreground">
          My Orders
        </h1>
        <p className="mt-2 text-muted-foreground">
            Check the status of your recent orders.
        </p>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle>{order.id}</CardTitle>
                <CardDescription>Placed on {order.date}</CardDescription>
              </div>
              <Badge
                variant={
                  order.status === 'Delivered'
                    ? 'default'
                    : order.status === 'Shipped'
                    ? 'secondary'
                    : 'outline'
                }
                className={order.status === 'Delivered' ? 'bg-green-600 text-white' : ''}
              >
                {order.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name} (x{item.quantity})</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-between items-center pt-4">
              <span className="font-semibold text-lg">
                Total: ${order.total.toFixed(2)}
              </span>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                View Invoice
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
