export interface Product {
  name: string;
  image_url: string;
  logo_url: string;
  category: string;
  views: number;
  start_date: string;
  end_date: string;
  discount: number;
  stars: number;
  old_price: string;
  disclaimer?: string;
  new_price?: string;
  id: string;
}
