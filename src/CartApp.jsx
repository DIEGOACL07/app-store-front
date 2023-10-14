import { Navbar } from './components/Navbar';
import { useItemsCart } from "./hooks/useItemsCart";
import { CartRoutes } from './routes/CartRoutes';

export const CartApp = () => {

    const { cartItems, handleAddProductCart, handleDeleteProductCart } = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container my-5">

                <h3 className='text-center'>Catalog</h3>
                <CartRoutes cartItems={cartItems}
                    handleAddProductCart={handleAddProductCart}
                    handleDeleteProductCart={handleDeleteProductCart}
                />
            </div>
        </>
    )
}
