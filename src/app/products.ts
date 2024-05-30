export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    inStock: boolean;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      inStock: true
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      inStock: true
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      inStock: false
    },
    {
      id: 4,
      name: 'LG',
      price: 890,
      description: 'A large phone with one of the best screens',
      inStock: true
    },
    {
      id: 5,
      name: 'IPad',
      price: 1500,
      description: 'A great ipad with one of the best cameras',
      inStock: false
    },
    {
      id: 6,
      name: 'Samsung tablet',
      price: 459,
      description: 'samsung galaxy tablet',
      inStock: true
    },
    {
      id: 7,
      name: 'Phone XL Toy',
      price: 79,
      description: 'A large phone with one of the best screens',
      inStock: true
    },
    {
      id: 8,
      name: 'Phone Mini Toy',
      price: 69,
      description: 'A great phone with one of the best cameras',
      inStock: true
    },
    {
      id: 9,
      name: 'Phone Standard Toy',
      price: 29,
      description: '',
      inStock: true
    },
    {
      id: 10,
      name: 'LG Toy',
      price: 89,
      description: 'A large phone with one of the best screens',
      inStock: true
    },
    {
      id: 11,
      name: 'IPad Toy',
      price: 150,
      description: 'A great ipad with one of the best cameras',
      inStock: true
    },
    {
      id: 12,
      name: 'Samsung tablet Toy',
      price: 45,
      description: 'samsung galaxy tablet',
      inStock: true
    },
  ];