import Card from "../components/Card";
// import contacts from "../contacts";
import { Link, json, useLoaderData } from "react-router-dom";
import { DATABASE_URL } from "./AddContact";

import useAuth from "../hooks/useAuth";

function MyContacts() {
  const user = useAuth();
  const data = useLoaderData();
  const contactsData = Object.values(data);

  console.log(contactsData);

  const createCard = (contact) => {
    return (
      <Card
        key={contact.phone}
        name={contact.name}
        img={contact.imageUrl}
        tel={contact.phone}
        email={contact.email}
      />
    );
  };

  let content = (
    <div className="cards-container">{contactsData.map(createCard)}</div>
  );

  if (!user) {
    content = (
      <Link className="login-button" to="/auth?mode=login">
        Please login to get started!
      </Link>
    );
  }

  return <div className="contacts-container">{content}</div>;
}

export default MyContacts;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await fetch(DATABASE_URL);

  if (!response.ok)
    throw json({ message: "Unable to get data" }, { status: 500 });

  const data = await response.json();
  return data;
};
