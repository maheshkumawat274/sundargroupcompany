import UserLayout from "../../../../components/branchlandingpage/sundarprint/user/DashboardLayout";
import { likedProducts, moveToCart } from "../../../../components/branchlandingpage/sundarprint/user/store";


const LikedProducts = () => {
  return (
    <UserLayout>
      <h1 className="text-xl font-bold mb-4">Liked Products</h1>

      {likedProducts.length === 0 && (
        <p className="text-gray-500">No liked products</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {likedProducts.map(p => (
          <div key={p.id} className="bg-white rounded shadow">
            <img src={p.image} className="h-40 w-full object-cover" />
            <div className="p-3">
              <h3 className="text-sm font-semibold">{p.name}</h3>
              <p className="text-green-600 font-bold">₹{p.price}</p>

              <button
                onClick={() => moveToCart(p.id)}
                className="mt-2 w-full bg-green-500 text-white py-1 rounded"
              >
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </UserLayout>
  );
};

export default LikedProducts;
