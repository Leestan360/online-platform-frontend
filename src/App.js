import Routings from "./routes/Routings";

function App() {
  const authToken = "a"
  const signToken = "b"
  
  return (
    <div className="">
        <Routings
          authToken={authToken}
          signToken={signToken}
        />
    </div>
  );
}

export default App;
