import { useEffect ,useState} from "react";
import { Splash } from "./components/Splash";


function App() {
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
   setTimeout(() => {
    setShowSplash(false)
   }, 5000);
  }, [])
  
  return (
    <div className="App">

      {showSplash &&<Splash/>}
    </div>
  );
}

export default App;
