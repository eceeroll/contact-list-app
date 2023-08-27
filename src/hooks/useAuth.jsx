import { useEffect, useState } from "react";
import { auth } from "../firebase"; // Firebase auth nesnesi

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}

export function checkUserAuthenticated ()  {
   const listener = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      return authUser;
    } else {
      return;
    }
  });

  listener()
}

export default useAuth;
