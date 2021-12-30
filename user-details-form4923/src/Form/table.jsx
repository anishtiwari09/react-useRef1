import { useState } from "react";
import Form from "./formInput";
const styles = {
  width: 100 / 8 - 4 + `%`,
  borderRight: "1px solid black",
  padding: "0.54rem"
};
function EmpoloyeeDetails({
  name,
  age,
  married,
  dept,
  address,
  salary,
  image,
  id = 0
}) {
  console.log(image);
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        border: "1px solid black",
        textAlign: "center"
      }}
    >
      <div
        style={{
          borderRight: "1px solid black",
          padding: "0.54rem",
          width: "120px",
          height: "120px"
        }}
      >
        {name}
      </div>
      <div style={styles}>{age}</div>
      <div
        style={{
          borderRight: "1px solid black",
          padding: "0.54rem",
          width: "120px",
          height: "120px"
        }}
      >
        {address}
      </div>
      <div
        style={{
          borderRight: "1px solid black",
          padding: "0.54rem",
          width: "120px",
          height: "120px"
        }}
      >
        {salary}
      </div>
      <div
        style={{
          borderRight: "1px solid black",
          padding: "0.54rem",
          width: "120px",
          height: "120px"
        }}
      >
        {married}
      </div>
      <div style={styles}>
        {!id ? (
          "Profile Pic"
        ) : (
          <img src={image} alt="image nt found" style={{ width: "90%" }} />
        )}
      </div>
      <div style={{ padding: "0.54rem", width: `${100 / 7 - 4}%` }}>{dept}</div>
    </div>
  );
}

export default function TableComponent() {
  const [state, setState] = useState([]);
  const handleData = (obj) => {
    //console.log(obj.image);
    // state.push(obj);
    setState([...state, { ...obj }]);
  };

  return (
    <div>
      <Form onSubmit={handleData} key={-1} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        {Boolean(state.length) && (
          <>
            <EmpoloyeeDetails
              name="Name"
              age="Age"
              address="Address"
              dept="Department"
              salary="Salary"
              married="Married"
              key={0}
            />
            {state.map((item, i) => (
              <EmpoloyeeDetails
                name={item.name}
                age={item.age}
                address={item.address}
                dept={item.dept}
                salary={`$${item.salary}`}
                married={item.married ? "Yes" : "No"}
                key={i + 1}
                id={i + 1}
                image={item.image}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
