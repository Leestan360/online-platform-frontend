import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleFetchData = () => {
    navigate("/cat-fact/facts");
  };
  return (
    <div className="py-5 px-10 space-y-5">
      <h3>Welcome Stanley</h3>
      <button
        onClick={handleFetchData}
        className="border rounded-[5px] px-2 py-1 text-white border-primary bg-primary hover:border-secondary hover:bg-secondary shadow-sm shadow-primary hover:shadow-secondary"
      >
        Fetch Data...
      </button>
    </div>
  );
}

export default Home;
