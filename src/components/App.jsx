import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  // along with the function handleChange we can aslo pass
  // an object event
  function handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  function handleClick() {
    // setHeading(event.target.value)
    setHeading(name);

    event.preventDefault();
  }
  return (
    <div className="container">
      {/* <h1>Hi {name} </h1> */}
      <h1>Hi {headingText} </h1>

      {/* onSubmit instead of onClick when using form */}

      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button
          type="submit"
          // onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
