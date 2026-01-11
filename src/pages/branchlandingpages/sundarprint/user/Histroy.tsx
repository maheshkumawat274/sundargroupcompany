import UserLayout from "../../../../components/branchlandingpage/sundarprint/user/DashboardLayout";
import { payments } from "../../../../components/branchlandingpage/sundarprint/user/store";

const Payments = () => {
  return (
    <UserLayout>
      <h1 className="text-xl font-bold mb-4">Payment History</h1>

      <div className="space-y-3">
        {payments.length === 0 && (
          <p className="text-gray-500">No payments yet</p>
        )}

        {payments.map(p => (
          <div
            key={p.id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <div>
              <p className="font-semibold">₹{p.amount}</p>
              <p className="text-xs text-gray-500">{p.date}</p>
            </div>

            <span
              className={`px-3 py-1 rounded text-sm ${
                p.status === "SUCCESS"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </UserLayout>
  );
};

export default Payments;
