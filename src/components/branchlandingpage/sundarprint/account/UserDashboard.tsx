import { useCart } from "../contextprint/useCart";

const UserDashboard = () => {
  const { cartItems, wishlistItems } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat title="Wishlist Products" value={wishlistItems.length} />
        <Stat title="Cart Products" value={cartItems.length} />
        <Stat title="Queries Sent" value={3} />
      </div>
    </div>
  );
};

const Stat = ({ title, value }: { title: string; value: number }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <p className="text-gray-500">{title}</p>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default UserDashboard;
