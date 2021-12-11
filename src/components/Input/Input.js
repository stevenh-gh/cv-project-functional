import React from "react";

const Input = (props) => {
  const { id, text, val } = props;
  return (
    <>
      <div>
        <label
          className="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2"
          htmlFor={id}
        >
          {text}
        </label>
        <br />
        <input
          className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500 leading-tight mb-3 py-3 px-4 w-full"
          type="text"
          name=""
          id={id}
          value={val}
        />
      </div>
      <br />
    </>
  );
};
export default Input;
