import "./App.css";
import MainCard from "./components/main-card/MainCard";
import { MyContextProvider } from "./MyContext";

const App: React.FC = () => {
  return (
    <main>
      <MyContextProvider>
        <MainCard />
      </MyContextProvider>
    </main>
  );
};

export default App;
