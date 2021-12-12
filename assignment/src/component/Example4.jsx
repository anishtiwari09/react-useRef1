import { useEffect, useRef, useState } from "react";

export const Form = ({ title }) => {
  const imageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    maritalStatus: false,
    image: null
  });
  useEffect(() => {
    const file = imageRef.current.files[0];
    let src = null;
    if (file) {
      src = URL.createObjectURL(file);
      setImageSrc(src);
      return () => {
        URL.revokeObjectURL(imageSrc);
      };
    }

    setImageSrc(src);
  }, [formState.image]);
  const handleFormUpdate = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type == "checkbox" ? checked : value;

    setFormState({ ...formState, [name]: val });
  };
  const handleSumbmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  const handleFileChange = (e) => {
    let file = e.target.files[0];
    setFormState({ ...formState, image: file });
    console.log(e.target.files);
  };
  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={handleSumbmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="name"
            value={formState.name}
            onChange={handleFormUpdate}
            name="name"
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            onChange={handleFormUpdate}
            value={formState.name}
            name="gender"
          >
            <option key="m">m</option>
            <option key="f">f</option>
          </select>
        </div>
        <div>
          <label>Martial Status</label>
          <input
            type="checkbox"
            checked={formState.maritalStatus}
            placeholder="name"
            onChange={handleFormUpdate}
            name="maritalStatus"
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <label>Upload Picture:</label>
          <input ref={imageRef} type="file" onChange={handleFileChange} />
          {imageSrc && (
            <img src={imageSrc} alt="not found" style={{ width: 100 }} />
          )}
        </div>
      </form>
    </>
  );
};
