import { Form, json, redirect } from "react-router-dom";

export const DATABASE_URL =
  "https://react-movie-app-6cb87-default-rtdb.firebaseio.com/contacts.json";

function AddContact() {
  return (
    <div className="add-contact-container">
      <h2>Add New Contact</h2>
      <Form method="post" className="add-contact-form">
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" name="imageUrl" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </div>
  );
}

export default AddContact;

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const data = await request.formData();

  const contactData = {
    name: data.get("name"),
    email: data.get("email"),
    phone: data.get("phone"),
    imageUrl: data.get("imageUrl"),
  };

  const response = await fetch(DATABASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });

  if (!response.ok)
    throw json({ message: "An error occured" }, { status: 500 });

  return redirect("/contacts");
};
