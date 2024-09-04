import { useState } from "react";
import BookGrid from "./components/Book/BookGrid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/nav/NavBar";

const data = [
  {
    id: 1,
    title: "The Great Adventure",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    author: "John Doe",
    price: 19.99,
    rating: 4.5,
    isFavorite: true,
    publish: 2024,
  },
  {
    id: 2,
    title: "Mystery of the Lost City",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    author: "Jane Smith",
    price: 14.99,
    rating: 4.0,
    isFavorite: false,
    publish: 2023,
  },
  {
    id: 3,
    title: "Cooking Made Easy",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    author: "Emily Brown",
    price: 29.99,
    rating: 4.8,
    isFavorite: true,
    publish: 2021,
  },
  {
    id: 4,
    title: "Science Fiction Wonders",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    author: "Michael Johnson",
    price: 22.99,
    rating: 4.2,
    isFavorite: false,
    publish: 2015,
  },
  {
    id: 5,
    title: "History of the Ancient World",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    author: "Sarah Wilson",
    price: 18.49,
    rating: 4.7,
    isFavorite: true,
    publish: 2018,
  },
  {
    id: 6,
    title: "The Art of Modern Cooking",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    author: "Laura Green",
    price: 25.0,
    rating: 4.6,
    isFavorite: true,
    publish: 2019,
  },
  {
    id: 7,
    title: "Journey Through Space",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    author: "David Clark",
    price: 30.5,
    rating: 4.3,
    isFavorite: false,
    publish: 2011,
  },
  {
    id: 8,
    title: "The Secrets of Ancient Magic",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    author: "Lisa White",
    price: 21.99,
    rating: 4.4,
    isFavorite: true,
    publish: 2004,
  },
  {
    id: 9,
    title: "Thrilling Mysteries",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    author: "Robert Hall",
    price: 17.75,
    rating: 4.1,
    isFavorite: false,
    publish: 2018,
  },
  {
    id: 10,
    title: "Deep Dive into History",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    author: "Nancy Lewis",
    price: 23.49,
    rating: 4.9,
    isFavorite: true,
    publish: 2013,
  },
];

const App = () => {
  const [books, setBook] = useState(data);

  const [filter, setFilter] = useState({ keyword: "", sort: "" });

  const handleKeyword = (value) => {
    setFilter({
      ...filter,
      keyword: value,
    });
  };

  const handleSort = (e) => {
    setFilter({
      ...filter,
      sort: e.target.value,
    });
  };
  const handleFavorite = (id) => {
    const updateBook = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          isFavorite: !book.isFavorite,
        };
      }
      return book;
    });
    setBook(updateBook);
  };

  // for filter books
  let filterBook = books.filter((book) => {
    if (filter.keyword === "") return book;
    if (book.title.toLowerCase().includes(filter.keyword.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  // let sortedBook = filterBook.toSorted((a, b) => {
  //   // ascending order
  //   if (filter.sort === "name_asc") {
  //     if (a.title < b.title) {
  //       return -1;
  //     }
  //     if (a.title > b.title) {
  //       return 1;
  //     }
  //     return 0;
  //   }

  //   // descending order
  //   if (filter.sort === "name_desc") {
  //     if (a.title > b.title) {
  //       return -1;
  //     }
  //     if (a.title < b.title) {
  //       return 1;
  //     }
  //     return 0;
  //   }

  //   // oldest year sort
  //   if (filter.sort === "year_asc") {
  //     return a.publish - b.publish;
  //   }
  //   // newest year sort
  //   if (filter.sort === "year_desc") {
  //     return b.publish - a.publish;
  //   }

  //   return 0;
  //   //
  // });

  const sortedBook = filterBook.toSorted((a, b) => {
    switch (filter.sort) {
      case "name_asc":
        return a.title.localeCompare(b.title);
      case "name_desc":
        return b.title.localeCompare(a.title);
      case "year_asc":
        return a.publish - b.publish;
      case "year_desc":
        return b.publish - a.publish;

      default:
        return 0;
    }
  });
  return (
    <>
      <NavBar />
      <main className="my-10 lg:my-14">
        <Header onkeyword={handleKeyword} onSort={handleSort} />
        <BookGrid books={sortedBook} onFav={handleFavorite} />
      </main>
      <Footer />
    </>
  );
};

export default App;
