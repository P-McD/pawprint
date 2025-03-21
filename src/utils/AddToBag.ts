// save selected product item in context
// Create cart item from product item 
// Post to current cart (when is cart created? - set new cart id in local storage or with cookies)

import { api } from "~/utils/api";

type AddToBagParams =
{
    cartId : string,
    productItem : { id: string;
    quantityInStock: number;
    productId: string;
    sizeName: string;}
}

export default async function AddToBag({productItem, cartId } : AddToBagParams)
{
    const cartItem = await api.cartItem.createNewCartItem.useMutation();
    cartItem.mutate({productItem, cartId})
}

