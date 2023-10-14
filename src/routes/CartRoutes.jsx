/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";


export const CartRoutes = ({handleAddProductCart, cartItems, handleDeleteProductCart}) => {

    return (
        <Routes>
            <Route path='catalog' element={<CatalogView handler={handleAddProductCart} />} />
            <Route path='cart' element={(
                cartItems?.length <= 0 ?
                    <div className='alert alert-warning'>No hay Productos</div>
                    :
                    (<div className="my-4 w-50">
                        <CartView items={cartItems} handleDelete={handleDeleteProductCart} />
                    </div>)
            )} />
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='/' element={<Navigate to={'/catalog'} />} />
        </Routes>
    )
}
