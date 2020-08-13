import React, { useState } from "react";
import { AppRouter } from "./routers/AppRouter";
import { UserContext } from "./context/UserContext";

export const App = () => {
  const [user, setUser] = useState({
    cedula: "40212345667",
    password: "qweqwewe",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
