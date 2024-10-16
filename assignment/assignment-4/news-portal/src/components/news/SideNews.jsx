const SideNews = ({ index, item }) => {
  const { title, description } = item || {};
  return (
    <div className="col-span-12 mb-6 md:col-span-8">
      {index === 0 && (
        <img className="w-full" src="./assets/thumb.png" alt="thumb" />
      )}
      {/* info */}
      <div className="col-span-12 mt-6 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">{description?.slice(0, 100)}</p>
        <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
      </div>
    </div>
  );
};

export default SideNews;
