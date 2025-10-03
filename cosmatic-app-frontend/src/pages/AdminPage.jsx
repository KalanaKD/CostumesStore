import { Link } from "react-router-dom";
import { Routes , Route } from "react-router-dom";
import AdminProductsPage from "./admin/AdminProductsPage.jsx";
import AddProductPage from "./admin/AddProductPage.jsx";
import EditProductPage from "./admin/EditProductPage.jsx";

export function AdminPage(){
    return(
        <div className="w-full h-screen flex">
            <div className="h-full w-[300px] bg-blue-900 flex flex-col text-white p-4 gap-4">
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/reviews">Reviews</Link>
            </div>
            <div className="h-full w-[calc(100%-300px)] bg-amber-400">
                <Routes path="/*">
                    <Route path='/products' element={<AdminProductsPage />} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/reviews" element={<h1>Reviews</h1>} />
                    <Route path="/add-product" element={<AddProductPage />} />
                    <Route path="/edit-product" element={<EditProductPage />} />
                </Routes>
            </div>
        </div>
    )
}