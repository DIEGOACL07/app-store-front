/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculatortotal } from "../service/productsService";

export const CartView = ({ handleDelete, items }) => {
    
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculatortotal(items));
    },[items])

    const onDeleteProducts = (id) => {
        handleDelete(id);
    }

    const onCalalog = () => {
        navigate('/catalog');
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h3>Cart</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                    {items.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price }</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDeleteProducts(item.product.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} className="text-end fw-bold">Total</td>
                        <td colSpan={4} className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
            <button type="button" className="btn btn-success"
            onClick={onCalalog}>Catalog</button>
        </div>
    )
}
