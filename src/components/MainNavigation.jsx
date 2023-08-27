import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function MainNavigation() {
  const user = useAuth();

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Logout Successful"))
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <li className="nav-item">
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Login
            </NavLink>
          </li>
        )}

        <li className="nav-item">
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            MyContacts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contacts/add"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            AddContact
          </NavLink>
        </li>
        {user && (
          <li className="user-info-container">
            <p className="user-log-info">Signed as {user.email}</p>
            <button className="logout-button" onClick={userSignOut}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MainNavigation;
