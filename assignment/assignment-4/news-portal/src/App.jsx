import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import News from "./components/news/News";
import SideNews from "./components/news/SideNews";
import { useNews } from "./context/NewsProvider";

const App = () => {
  const { data: news, isLoading, error } = useNews();

  let content;
  let leftNews = [];
  let rightNews = [];

  if (news.length) {
    const slicePoint = Math.ceil(news.length / 2);
    leftNews = news.slice(0, slicePoint);
    rightNews = news.slice(slicePoint);
  }

  if (isLoading) {
    content = <p>loading</p>;
  }

  if (!isLoading && error) {
    content = <p>some think went wrong</p>;
  }

  if (!isLoading && !error && news?.length === 0) {
    content = <p>No news found</p>;
  }
  if (!isLoading && !error && news?.length > 0) {
    content = (
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* left */}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          {leftNews.map((item, index) => {
            let status = "normal";
            if (index === 0) {
              status = "main";
            } else if (index === 1) {
              status = "sub-main";
            }

            return <News key={index} status={status} item={item} />;
          })}
        </div>
        {/* right */}
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {rightNews.map((item, index) => {
              return <SideNews key={index} index={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />

      <main className="my-10 lg:my-14">{content}</main>

      <Footer />
    </>
  );
};

export default App;
