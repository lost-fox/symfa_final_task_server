export class CreateNewOrder {
  userId: string;
  total: number;
  meals: {
    name: string;
    price: number;
    count: number;
  }[];
  courier: {
    id: string;
    name: string;
    image: string;
  }[];
  deliveryTime: number;
  start: Date;
  finish: Date;
}
