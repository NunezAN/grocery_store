import React, { useRef } from "react";

const Input = () => {
  let amountItems = useRef("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(amountItems.current.value);
  }
  return (
    <div className="mx-auto p-4 text-white max-w-xl">
      <form onSubmit={handleSubmit} className="flex">
        <input
          ref={amountItems}
          className="flex-1 bg-inherit border-white border-2 rounded-xl p-2"
          placeholder="enter amount of items"
          type="text"
        />
        <button
          type="submit"
          className="border-white border-2 rounded-xl p-2 ml-4"
        >
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Input;
