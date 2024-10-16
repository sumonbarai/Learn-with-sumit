const News = ({ status = "normal", item }) => {
  const { title, description } = item || {};
  if (status === "main") {
    return (
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <a href="#">
            <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
              {title}
            </h3>
          </a>
          <p className="text-base text-[#5C5955]">
            {description?.slice(0, 200)}
          </p>
          <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <img className="w-full" src="./assets/thumb_lg.png" alt="thumb" />
          <p className="mt-5 text-base text-[#5C5955]">
            Illustration: Karolis Strautniekas
          </p>
        </div>
      </div>
    );
  }

  if (status === "sub-main") {
    return (
      <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
        {/* info */}
        <div className="col-span-12 md:col-span-6">
          <a href="">
            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
          </a>
          <p className="text-base text-[#292219]">
            {description?.slice(0, 200)}
          </p>
          <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
        </div>
        {/* thumb */}
        <div className="col-span-12 md:col-span-6">
          <img className="w-full" src="./assets/thumb.png" alt="thumb" />
        </div>
      </div>
    );
  }

  // if index is more then 2
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="col-span-12 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">{description?.slice(0, 200)}</p>
        <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
      </div>
    </div>
  );
};

export default News;
