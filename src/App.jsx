import { useEffect, useState } from "react";
import Input from "./components/Input";

function App() {
  const [cashiers, setCashiers] = useState([[], [5], [10], [], [2]]);
  // const [newCustomer, setNewCustomer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCashiers((current) =>
        current.map((cashier) =>
          [cashier[0] - 1, ...cashier.slice(1)].filter((val) => val > 0)
        )
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="bg-black h-screen w-full">
      <Input cashiers={cashiers} setCashiers={setCashiers}></Input>
      <div className="flex justify-center gap-6">
        {cashiers.map((cashier, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="h-6 w-6 border-2 border-white"></div>
            {cashier.map((customer, index) => (
              <div
                key={index}
                className="h-6 w-6 border-2 border-white text-white rounded-full text-sm flex justify-center items-center"
              >
                {customer}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
