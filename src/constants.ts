export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'coffee' | 'pastry';
  description: string;
  image: string;
}

export interface Combo {
  id: string;
  name: string;
  price: number;
  items: string[];
  description: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'hot-coffee',
    name: 'Hot Coffee',
    price: 5,
    category: 'coffee',
    description: 'Freshly brewed artisan beans with a smooth finish.',
    image: 'https://picsum.photos/seed/coffee1/600/600'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    price: 6,
    category: 'coffee',
    description: 'Rich, creamy Belgian chocolate with steamed milk.',
    image: 'https://picsum.photos/seed/chocolate1/600/600'
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    price: 7,
    category: 'coffee',
    description: 'Chilled espresso over ice with a touch of sweetness.',
    image: 'https://picsum.photos/seed/icedcoffee1/600/600'
  },
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    price: 10,
    category: 'pastry',
    description: 'Decadent layer cake with dark chocolate ganache.',
    image: 'https://picsum.photos/seed/cake1/600/600'
  },
  {
    id: 'croissant',
    name: 'Croissant',
    price: 7,
    category: 'pastry',
    description: 'Buttery, flaky traditional French pastry.',
    image: 'https://picsum.photos/seed/croissant1/600/600'
  }
];

export const COMBOS: Combo[] = [
  {
    id: 'morning-starter',
    name: 'Morning Starter',
    price: 10,
    items: ['Hot Coffee', 'Croissant'],
    description: 'The perfect way to kickstart your day.'
  },
  {
    id: 'sweet-treat',
    name: 'Sweet Treat',
    price: 15,
    items: ['Iced Coffee', 'Chocolate Cake'],
    description: 'A delightful afternoon pick-me-up.'
  },
  {
    id: 'group-box',
    name: 'Group Box',
    price: 25,
    items: ['Any 4 Items'],
    description: 'Great for sharing with friends (Any 4 items of your choice).'
  }
];
