import { useRef, useState } from "react";

export default function Form({ title }) {
  const imageRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    role: "",
    image: "",
    martialStatus: false
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = null;
    if (type === "checkbox") val = checked;
    else if (type === "file") {
      val = e.target.files[0];
    } else val = value;
    setFormState({ formState, [name]: val });
  };
  const handleSubmit = (e) => {
    console.log(formState);

    e.preventDefault();
  };
  return (
    <div>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text "
            value={formState.name}
            placeholder="Enter Name Please..."
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label>Gender: </label>
          <select
            onChange={handleChange}
            name="gender"
            value={formState.gender}
          >
            <option value="m">m</option>
            <option value="f">f</option>
          </select>
        </div>
        <div>
          <label>Role: </label>
          <select onChange={handleChange} name="role" value={formState.role}>
            <option value="web">Web Developer</option>
            <option value="android">Android Developer</option>
          </select>
        </div>
        <div>
          <label>Marital Status: </label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="martialStatus"
            checked={formState.martialStatus}
          />
        </div>
        <div>
          <label>Upload Picture: </label>
          <input
            ref={imageRef}
            type="file"
            onChange={handleChange}
            name="image"
          />
        </div>
        <div>
          <input type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
