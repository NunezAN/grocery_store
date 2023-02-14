import React, { useRef } from "react";

const Input = ({ cashiers, setCashiers }) => {
  let amountItems = useRef("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(amountItems.current.value);
    // setNewCustomer(Number(amountItems.current.value));
    let least_Num = 1e9;
    let least_Cashier;
    cashiers.forEach((cashier, id) => {
      //   console.log(id);
      const cashierItems = cashier.reduce((sum, value) => sum + value, 0);
        console.log(cashierItems);
      if (least_Num > cashierItems) {
        least_Num = cashierItems;
        least_Cashier = id;
      }
    });
    setCashiers((current) => {
      //   console.log(current);
      return current.map((line, id) => {
        if (least_Cashier === id) {
          return [...line, parseInt(amountItems.current.value)];
        } else {
          return line;
        }
      });
    });
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
