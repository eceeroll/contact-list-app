// Navigation -> Home Login MyContacts AddContact
// Home -> Just shows some text
// Login -> Must Authenticate the user
// MyContacts, AddContact -> If User is not logged in, when clicked redirect to Login

// TODOS : 
// Edit and Delete Contact
// Add Validation and show error messages
// Show a Login succesfull Alert

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import MyContacts, { loader as contactsLoader } from "./pages/MyContacts";
import AddContact, { action as addAction } from "./pages/AddContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth", element: <Auth /> },
      {
        path: "contacts",
        children: [
          { index: true, element: <MyContacts />, loader: contactsLoader },
          { path: "add", element: <AddContact />, action: addAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
