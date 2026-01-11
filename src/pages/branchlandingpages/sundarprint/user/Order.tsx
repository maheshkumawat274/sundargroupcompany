import UserLayout from "../../../../components/branchlandingpage/sundarprint/user/DashboardLayout";
import { orders } from "../../../../components/branchlandingpage/sundarprint/user/store";

const Orders = () => {
  return (
    <UserLayout>
      <h1 className="text-xl font-bold mb-4">Orders</h1>

      <div className="space-y-4">
        {orders.length === 0 && (
          <p className="text-gray-500">No orders yet</p>
        )}

        {orders.map(o => (
          <div key={o.id} className="bg-white p-4 rounded shadow">
            <p className="font-semibold">{o.id}</p>
            <p className="text-sm text-gray-500">{o.date}</p>
            <p className="font-bold mt-1">₹{o.total}</p>
          </div>
        ))}
      </div>
    </UserLayout>
  );
};

export default Orders;
