import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login/sign-in");
  };

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
}
