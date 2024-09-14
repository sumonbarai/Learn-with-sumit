import logo from "../../assets/logo.svg";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import cartImg from "../../assets/shopping-cart.svg";
import ring from "../../assets/ring.svg";
import MovieCart from "../Movie/MovieCart";
import { useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import { disableScrollBar } from "../../utils/movieUtils";

const Header = () => {
  const [showCart, setCartShow] = useState(false);
  const { setMode, mode } = useTheme();
  const handleShowCart = () => {
    setCartShow(!showCart);
  };

  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  // scroll bar hidden or auto
  showCart ? disableScrollBar("hidden") : disableScrollBar("auto");
  return (
    <header>
      {showCart && <MovieCart onShow={handleShowCart} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width={139} height={26} alt="logo" />
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width={24} height={24} alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer"
              onClick={handleMode}
            >
              <img
                src={mode === "dark" ? sun : moon}
                width={24}
                height={24}
                alt="sun"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer"
              onClick={handleShowCart}
            >
              <img src={cartImg} width={24} height={24} alt="shopping cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
