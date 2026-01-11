import UserLayout from "../../../../components/branchlandingpage/sundarprint/user/DashboardLayout";


const Dashboard = () => {
  return (
    <UserLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Liked", value: 5 },
          { title: "Cart", value: 2 },
          { title: "Orders", value: 7 },
          { title: "Payments", value: 7 },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl p-4 shadow"
          >
            <p className="text-gray-500">{card.title}</p>
            <p className="text-3xl font-bold text-green-600">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </UserLayout>
  );
};

export default Dashboard;
