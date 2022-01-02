import React, { useState, useReducer, useEffect, useRef } from "react";
import axios from "axios";
import Button from "./components/button";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        // logical part
        count: state.count + 1,
        showText: state.showText,
      };
    case "toggleInput":
      return {
        // logical part
        count: state.count,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

const useStateHookLearning = () => {
  const [inputValue, changeInputValue] = useState();
  const handleChangeInputValue = (e) => {
    const value = e.target.value;
    changeInputValue(value);
  };
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="enter text..."
          onChange={handleChangeInputValue}
        />
        <small className="form-text text-muted">{inputValue}</small>
      </div>
    </form>
  );
};

const useReducerHookLearning = () => {
  const [state, dispatcher] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h2>Counter {state.count}</h2>
      <button
        onClick={() => {
          dispatcher({ type: "increment" });
          dispatcher({ type: "toggleInput" });
        }}
      >
        Click here
      </button>
      <p>{state.showText ? "Text here" : ""}</p>
    </div>
  );
};

const useEffectHookLearning = () => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("call one time when the component render!");
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data[0]);
      setData(res.data[0].email);
    });
  }, []);

  useEffect(() => {
    console.log("calls every time when page render!!");
  });

  useEffect(() => {
    console.log("calls every when particular state update!");
  }, [data]);

  return (
    <React.Fragment>
      <h4>learning 'useEffect' Hook in react!!! {data}</h4>
      <p className="d-inline">counter : {counter}</p>
      <span
        className="btn btn-sm btn-primary d-inline ml-2"
        onClick={() => {
          setCounter(counter + 1);
          setData("admin@email.com");
        }}
      >
        increment
      </span>
    </React.Fragment>
  );
};

const useRefHookLearning = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>Noxpopco</h2>
      <input
        type="text"
        placeholder="Ex .."
        className="input-group"
        ref={inputRef}
      />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

const useImperativeHookLearning = () => {
  const toggleRef = useRef(null);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          toggleRef.current.alterToggle();
        }}
      >
        {" "}
        button from parent
      </button>
      <Button ref={toggleRef} />
    </React.Fragment>
  );
};

export default useImperativeHookLearning;

// export default useRefHookLearning;
// export default useEffectHookLearning;
// export default useReducerHookLearning;
// export default useStateHookLearning;
