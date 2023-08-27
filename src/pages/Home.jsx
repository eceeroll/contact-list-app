import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// function Home() {
//   const user = useAuth();

//   let username = "";
//   if (user && user.email) {
//     username = user.email.split("@")[0];
//   }

//   return (
//     <div className="welcome-container">
//       <h1>
//         Welcome to Contact List App{" "}
//         {user && username && <span>{username}!</span>}{" "}
//       </h1>
//       <p>Your place to manage your contacts.</p>

//       {user ? (
//         <Link to="contacts" className="login-button">
//           Get Started
//         </Link>
//       ) : (
//         <Link to="/auth?mode=login" className="login-button">
//           Login
//         </Link>
//       )}
//     </div>
//   );
// }

function Home() {
  const user = useAuth();
  const username = user ? user.email.split("@")[0] : "Guest";

  return (
    <div className="container">
      <div className="welcome-container">
        <h2>Welcome to Contact List App {user && <span>{username}</span>} </h2>
        <p>Your place to manage your contacts.</p>

        {user ? (
          <Link to="contacts" className="login-button">
            Get Started
          </Link>
        ) : (
          <Link to="auth?mode=login" className="login-button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
