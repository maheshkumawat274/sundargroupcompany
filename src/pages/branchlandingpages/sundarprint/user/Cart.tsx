import UserLayout from "../../../../components/branchlandingpage/sundarprint/user/DashboardLayout";
import { cartProducts, checkout, removeFromCart } from "../../../../components/branchlandingpage/sundarprint/user/store";

const Cart = () => {
  const total = cartProducts.reduce((s, p) => s + p.price, 0);

  return (
    <UserLayout>
      <h1 className="text-xl font-bold mb-4">Cart</h1>

      {cartProducts.length === 0 && (
        <p className="text-gray-500">Cart is empty</p>
      )}

      <div className="space-y-4">
        {cartProducts.map(p => (
          <div key={p.id} className="bg-white p-4 rounded shadow flex gap-4">
            <img src={p.image} className="w-20 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-green-600 font-bold">₹{p.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(p.id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cartProducts.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <p className="font-bold">Total: ₹{total}</p>
          <button
            onClick={checkout}
            className="mt-3 w-full bg-green-600 text-white py-2 rounded"
          >
            Checkout
          </button>
        </div>
      )}
    </UserLayout>
  );
};

export default Cart;
