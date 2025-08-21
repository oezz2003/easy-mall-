
import type { Product } from '@/context/shop-context';

export const allProducts: Product[] = [
  // Women's Collection
  { id: 1, name: 'Classic Denim Jacket', price: 79.99, image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg', hint: 'denim jacket', category: 'Jackets', tags: ['women', 'fall'] },
  { id: 2, name: 'Leather Ankle Boots', price: 129.99, image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg', hint: 'leather boots', category: 'Shoes', tags: ['women', 'winter'] },
  { id: 3, name: 'Striped Cotton T-Shirt', price: 39.99, image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg', hint: 'striped t-shirt', category: 'T-Shirts', tags: ['women', 'summer'] },
  { id: 4, name: 'Wide-Leg Trousers', price: 89.99, image: 'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg', hint: 'fashion trousers', category: 'Trousers', tags: ['women', 'summer', 'fall'] },
  { id: 13, name: 'Floral Maxi Dress', price: 119.99, image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg', hint: 'maxi dress', category: 'Dresses', tags: ['women', 'summer'] },
  { id: 14, name: 'Cashmere Sweater', price: 199.99, image: 'https://images.pexels.com/photos/3771649/pexels-photo-3771649.jpeg', hint: 'cashmere sweater', category: 'Sweaters', tags: ['women', 'winter', 'fall'] },
  { id: 15, name: 'High-Waist Skinny Jeans', price: 99.99, image: 'https://images.pexels.com/photos/1666069/pexels-photo-1666069.jpeg', hint: 'skinny jeans', category: 'Trousers', tags: ['women', 'all-season'] },
  { id: 16, name: 'Suede Tote Bag', price: 149.99, image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg', hint: 'tote bag', category: 'Accessories', tags: ['women', 'fall'] },

  // Men's Collection
  { id: 5, name: 'Plain White T-Shirt', price: 29.99, image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg', hint: 'white t-shirt', category: 'T-Shirts', tags: ['men', 'summer'] },
  { id: 6, name: 'Black Leather Jacket', price: 199.99, image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg', hint: 'leather jacket', category: 'Jackets', tags: ['men', 'winter', 'fall'] },
  { id: 7, name: 'Blue Straight-Leg Jeans', price: 99.99, image: 'https://images.pexels.com/photos/1230679/pexels-photo-1230679.jpeg', hint: 'blue jeans', category: 'Trousers', tags: ['men', 'all-season'] },
  { id: 8, name: 'White Leather Sneakers', price: 119.99, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg', hint: 'white sneakers', category: 'Shoes', tags: ['men', 'all-season'] },
  { id: 9, name: 'Baseball Cap', price: 24.99, image: 'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg', hint: 'baseball cap', category: 'Accessories', tags: ['men', 'summer'] },
  { id: 10, name: 'Aviator Sunglasses', price: 69.99, image: 'https://images.pexels.com/photos/701839/pexels-photo-701839.jpeg', hint: 'aviator sunglasses', category: 'Accessories', tags: ['men', 'women', 'summer'] },
  { id: 11, name: 'Classic Wristwatch', price: 249.99, image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg', hint: 'wristwatch', category: 'Accessories', tags: ['men'] },
  { id: 12, name: 'Canvas Backpack', price: 59.99, image: 'https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg', hint: 'canvas backpack', category: 'Accessories', tags: ['men', 'women'] },
  { id: 17, name: 'Wool Peacoat', price: 220.00, image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg', hint: 'wool peacoat', category: 'Jackets', tags: ['men', 'winter'] },
  { id: 18, name: 'Chino Shorts', price: 49.99, image: 'https://images.pexels.com/photos/2034871/pexels-photo-2034871.jpeg', hint: 'chino shorts', category: 'Trousers', tags: ['men', 'summer'] },

  // Kids Collection
  { id: 19, name: 'Dinosaur Graphic Tee', price: 19.99, image: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg', hint: 'kids t-shirt', category: 'T-Shirts', tags: ['kids', 'summer'] },
  { id: 20, name: 'Rainbow Puffer Jacket', price: 69.99, image: 'https://images.pexels.com/photos/6112999/pexels-photo-6112999.jpeg', hint: 'kids jacket', category: 'Jackets', tags: ['kids', 'winter'] },
  { id: 21, name: 'Elastic Waist Jeggings', price: 29.99, image: 'https://images.pexels.com/photos/3663923/pexels-photo-3663923.jpeg', hint: 'kids jeans', category: 'Trousers', tags: ['kids', 'all-season'] },
  { id: 22, name: 'Light-Up Sneakers', price: 45.99, image: 'https://images.pexels.com/photos/4753997/pexels-photo-4753997.jpeg', hint: 'kids shoes', category: 'Shoes', tags: ['kids'] },
  { id: 23, name: 'Cozy Bear Onesie', price: 34.99, image: 'https://images.pexels.com/photos/5623675/pexels-photo-5623675.jpeg', hint: 'kids onesie', category: 'Apparel', tags: ['kids', 'winter'] },
  { id: 24, name: 'Sunny Day Sunhat', price: 15.99, image: 'https://images.pexels.com/photos/459957/pexels-photo-459957.jpeg', hint: 'kids sunhat', category: 'Accessories', tags: ['kids', 'summer'] },
];
