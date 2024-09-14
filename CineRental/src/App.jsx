import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieList from "./components/Movie/MovieList";
import SideBar from "./components/SideBar/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/ThemeProvider";

const App = () => {
  const { mode } = useTheme();
  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
