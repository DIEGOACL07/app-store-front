import { useEffect, useReducer } from "react";
import { itemReducer } from "../reducer/itemReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialCardItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {
    
    const [cartItems, dispatch] = useReducer(itemReducer, initialCardItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const handleAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {

            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );

        } else {
            dispatch({
                type: AddProductCart,
                payload: product,
            });
        }
    }

    const handleDeleteProductCart = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        )
    }
  
    return {

        cartItems,
        handleAddProductCart,
        handleDeleteProductCart,
    };
}
