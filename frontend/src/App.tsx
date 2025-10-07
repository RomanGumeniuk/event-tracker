import { useState } from "react";
import { Input } from "./components/ui/input";

function App() {
  const [name, setName] = useState("");

  return (
    <div
      className="flex flex-col justify-center items-center h-screen font-lato"
      style={{
        background:
          "radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)",
      }}
    >
      <Input
        className="w-1/2 h-1/12 border-2 border-gray-300 rounded-lg border-radius-md p-2 text-center text-lg"
        placeholder="Enter your name"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setName(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}

export default App;
