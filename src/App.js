import { useEffect, useRef, useState } from "react";
import "./App.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    setStatus(navigator.onLine);
  }, [navigator]);
  console.log(status);
  return status;
};
function App() {
  const network = useNetwork();
  return (
    <div className="App">
      <h1>{network}</h1>
      <p>asdjfajifjei aiji</p>
    </div>
  );
}

export default App;
