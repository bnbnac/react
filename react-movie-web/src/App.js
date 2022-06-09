import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((current) => current + 1);
  const onChange = (event) => setKeyword((current) => event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when counter changes");
  }, [counter]);
  return (
    <div>
      <input
        valuu={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Hi</button>
    </div>
  );
}

export default App;
