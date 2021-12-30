import { useEffect, useRef, useState } from "react";

export default function Form({ onSubmit }) {
  const ref = useRef(null);
  const [img, setImg] = useState(false);
  useEffect(() => {
    let files = ref.current.files[0];
    console.log(typeof files);
    let src = null;
    if (files) {
      src = URL.createObjectURL(files);
      setState({ ...state, image: src });
      // return URL.revokeObjectURL(src);
    }
  }, [img]);

  const [state, setState] = useState({
    name: "",
    age: "",
    address: "",
    salary: "",
    married: false,
    dept: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    let val = type == "checkbox" ? checked : value;
    setState({ ...state, [name]: val });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in state)
      if (state[key] === "" || state[key] === null) {
        alert("please fill all the field");
        return;
      }
    onSubmit(state);
    setState({
      name: "",
      age: "",
      address: "",
      salary: "",
      married: false,
      dept: "",
      image: null
    });
    ref.current.value = "";
  };
  return (
    <div>
      <form
        style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="john smith"
            name="name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            placeholder="23"
            name="age"
            onChange={handleChange}
            value={state.age}
          />
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            placeholder="california"
            name="address"
            onChange={handleChange}
            value={state.address}
          />
        </div>
        <div>
          <label>Deoartment: </label>
          <select name="dept" onChange={handleChange} value={state.dept}>
            <option value="">select</option>
            <option value="Software Development">Software Development</option>
            <option value="Testing">Testing</option>
            <option value="legal">legal</option>
          </select>
        </div>
        <div>
          <label>Salary: </label>
          <input
            type="number"
            placeholder="$100000"
            name="salary"
            onChange={handleChange}
            value={state.salary}
          />
        </div>
        <div>
          <label>isMarried: </label>
          <input
            type="checkbox"
            name="married"
            onChange={handleChange}
            checked={state.married}
          />
        </div>
        <div>
          <label>image upload: </label>
          <input
            type="file"
            name="image"
            ref={ref}
            filename="hellow"
            onChange={(e) => setImg(!img)}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
