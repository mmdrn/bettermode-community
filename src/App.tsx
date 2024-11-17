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
        <div>
          <div className="container mx-auto">
            <div className="grid grid-cols-5 gap-8">
              {Array.from({ length: 7 }).map((_, i) => (
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full aspect-square bg-slate-400 rounded-xl relative"></div>
                  <div className="w-full flex items-start justify-start flex-col p-4 pt-6 -mt-3 rounded-b-md">
                    <h2 className="truncate font-bold w-full font-mono mb-3">
                      Building a Scalable Next.js App: Best Practices and
                      Pitfalls
                    </h2>
                    <p>
                      This post delves into how developers can architect a
                      Next.js application for scalability. Cover topics like
                      folder structure optimization...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
