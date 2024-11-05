import { API } from '@/app/api';
import { ProductModel } from '@/interfaces/product.interface';

export const getProducts = async (
  category: string | undefined,
): Promise<ProductModel[]> => {
  try {
    const res = await fetch(API.product.find, {
      method: 'POST',
      body: JSON.stringify({ category, limit: 10 }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
