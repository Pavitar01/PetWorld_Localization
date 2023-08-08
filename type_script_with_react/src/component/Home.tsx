import { signOut } from "firebase/auth";
import { auth } from "../config/firebase/Index";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button
        style={{
          backgroundColor: "blue",
          borderRadius: "10px",
          padding: "20px",
          fontSize: "20px",
          cursor: "pointer",
        }}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
