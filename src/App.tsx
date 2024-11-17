import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="border-b p-2 mb-6">
          <div className="container mx-auto">
            <h1 className="font-bold text-2xl font-mono inline-flex items-center justify-start gap-3">
              <span className="text-3xl w-11 h-11 rounded-md bg-blue-500 flex items-center justify-center">
                🥸
              </span>
              Bettermode Community
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
