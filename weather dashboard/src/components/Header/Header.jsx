import { useState } from "react";
import Favorite from "./Favorite";
import FavoriteModal from "./FavoriteModal";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container w-full flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <Search />
          <Favorite onShow={handleShow} />
          {show && <FavoriteModal />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
