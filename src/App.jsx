// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./Context";

function App() {
  const { isLoading } = useGlobalContext();

  return isLoading ? (
    <div className="loading"></div>
  ) : (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
