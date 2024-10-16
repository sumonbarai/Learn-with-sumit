import Header from "./components/Header/Header";
import WeatherBoard from "./components/WeatherBoard/WeatherBoard";
import { useWeather } from "./context/WeatherProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { loading, error } = useWeather();

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Header />

      {loading.status ? (
        <div className="text-center bg-black p-3 text-white text-3xl">
          {loading.msg}
        </div>
      ) : (
        <>
          <main>
            <section className="">
              <div className="container">
                <WeatherBoard />
              </div>
            </section>
          </main>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
