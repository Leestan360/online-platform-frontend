import Routings from "./routes/Routings";
import useAuthStore from "./store/store";

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="">
        <Routings user={user}
        />
    </div>
  );
}

export default App;
