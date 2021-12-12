import Example1 from "./component/Example1";
import Example2 from "./component/Example2";
import Example3 from "./component/Example3";
import { Form } from "./component/Example4";
import { Example5 } from "./component/Example5";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Example2 title={"Example2"} /> */}
      <Form title={"Form"} />
      <hr />
      <Example5 />
    </div>
  );
}
