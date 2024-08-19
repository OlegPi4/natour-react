import { useState } from "react";

const FormUserPage = (props) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const { currentUser } = props;
  console.log(currentUser.name);

  return (
    <>
      <form
        className="form form-user-data"
        action="/submit-user-data"
        method="POST"
      >
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name{" "}
          </label>
          <input
            id="name"
            className="form__input"
            type="text"
            value={currentUser.name}
            required="required"
            name="name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className="form__input"
            type="email"
            value={currentUser.email}
            required="required"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
      </form>
    </>
  );
};

export default FormUserPage;
