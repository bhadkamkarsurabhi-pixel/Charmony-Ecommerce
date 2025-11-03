export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  imageIds: string[];
  rating: number;
  reviews: number;
  category: string;
  stock: number;
};

export type Category = {
  id: string;
  name: string;
  imageId: string;
};

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatarId: string;
};

export type Order = {
    id: string;
    customer: {
        name: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        pincode: string;
    };
    items: {
        id: string;
        name: string;
        quantity: number;
        price: number;
    }[];
    total: number;
    paymentMethod: 'cod' | 'upi' | 'card';
    paymentStatus: 'pending' | 'paid' | 'failed';
    orderStatus: 'pending' | 'shipped' | 'delivered' | 'cancelled';
    date: Date;
}
