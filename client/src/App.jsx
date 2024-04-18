import { Button } from "@/components/ui/button";
import AccountPage from "./pages/account/AccountPage";
import { useState } from "react";

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
    <div>
      {/* <div className="bg-slate-600">Hlloe</div>
      <Button>Click me</Button> */}

      <AccountPage user={user} />
    </div>
  );
}

export default App;
