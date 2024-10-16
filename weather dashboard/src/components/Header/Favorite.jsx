import heart from "../../assets/heart.svg";

const Favorite = ({ onShow }) => {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all text-white"
      onClick={onShow}
    >
      <img src={heart} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favorite;
