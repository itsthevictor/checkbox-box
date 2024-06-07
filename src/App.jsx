import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="box">
          {" "}
          <input type="checkbox" id="kilario" />
          <label htmlFor="kilario">kilario</label>
          <input type="checkbox" id="vinicius" />
          <label htmlFor="vinicius">vinicius</label>
          <input type="checkbox" id="carau" />
          <label htmlFor="carau">carau</label>
          <input type="checkbox" id="egberto" />
          <label htmlFor="egberto">egberto</label>
          <input type="checkbox" id="carlo" />
          <label htmlFor="carlo">carlo</label>
          <input type="checkbox" id="joao" />
          <label htmlFor="joao">joao</label>
          <input type="checkbox" id="federico" />
          <label htmlFor="federico">federico</label>
          <input type="checkbox" id="eduardo" />
          <label htmlFor="eduardo">eduardo</label>
        </div>
      </div>
    </>
  );
}

export default App;
