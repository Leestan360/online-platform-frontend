import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store";

function Home({ user }) {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  // Handle fetch data
  const handleFetchData = () => {
    navigate("/cat-fact/facts");
  };

  // Handle Logout
  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <div className="py-5 px-10 space-y-5">
      <div className="flex justify-between">
        <h3 className="text-xl">Welcome {user?.user?.username}</h3>
        <button
          onClick={handleLogout}
          className="border rounded-[5px] px-3 py-1 text-white border-primary bg-primary hover:border-secondary hover:bg-secondary shadow-sm shadow-primary hover:shadow-secondary"
        >
          Logout
        </button>
      </div>
      <button
        onClick={handleFetchData}
        className="border rounded-[5px] px-3 py-1 text-white border-primary bg-primary hover:border-secondary hover:bg-secondary shadow-sm shadow-primary hover:shadow-secondary"
      >
        Fetch Data...
      </button>
    </div>
  );
}

export default Home;
