import { useEffect } from "react";
import { useRouter } from "next/router";

const DashboardHome = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login/sign-in");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login/sign-in");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl font-bold text-center">Home</h1>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            onClick={handleLogout}
            className="w-1/3 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
