export interface Iproduct
{
  id: number;
  name: string;
  quantity: number;
  price: number;
  categoryID: number;
  imgUrl?: string;
  purchaseDate?: Date;
  discount:number

}
