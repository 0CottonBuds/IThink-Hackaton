import AccountPage from "./pages/AccountPage";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  // dummy data. the user api request will be called
  // in the authentication page and stored with redux
  const [user, setUser] = useState({
    email: "ryansanisit19@gmail.com",
    userId: "randomId",
    username: "yisaaaa",
    bio: "One plus one is twenty one.",
  });

  return (
    <>
      <Home user={user}></Home>
      {/* <AccountPage user={user}/> */}
    </>
  );
}

export default App;
