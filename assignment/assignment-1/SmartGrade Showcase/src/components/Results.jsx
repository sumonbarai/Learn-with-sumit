/* eslint-disable react/no-unknown-property */

import ResultList from "./ResultList";

const classA = [
  {
    ID: 1,
    Name: "John Doe",
    img: "https://via.placeholder.com/150/92c952",
    Scores: 85,
    Percentage: 85.0,
  },
  {
    ID: 2,
    Name: "Jane Smith",
    img: "https://via.placeholder.com/150/771796",
    Scores: 90,
    Percentage: 90.0,
  },
  {
    ID: 3,
    Name: "Alice Johnson",
    img: "https://via.placeholder.com/150/24f355",
    Scores: 78,
    Percentage: 78.0,
  },
  {
    ID: 4,
    Name: "Bob Brown",
    img: "https://via.placeholder.com/150/d32776",
    Scores: 92,
    Percentage: 92.0,
  },
  {
    ID: 5,
    Name: "Charlie Green",
    img: "https://via.placeholder.com/150/f66b97",
    Scores: 88,
    Percentage: 88.0,
  },
  {
    ID: 6,
    Name: "Diana White",
    img: "https://via.placeholder.com/150/56a8c2",
    Scores: 91,
    Percentage: 91.0,
  },
  {
    ID: 7,
    Name: "Eve Black",
    img: "https://via.placeholder.com/150/b0f7cc",
    Scores: 83,
    Percentage: 83.0,
  },
  {
    ID: 8,
    Name: "Frank Blue",
    img: "https://via.placeholder.com/150/54176f",
    Scores: 79,
    Percentage: 79.0,
  },
  {
    ID: 9,
    Name: "Grace Yellow",
    img: "https://via.placeholder.com/150/51aa97",
    Scores: 87,
    Percentage: 87.0,
  },
  {
    ID: 10,
    Name: "Hank Red",
    img: "https://via.placeholder.com/150/9c184f",
    Scores: 94,
    Percentage: 94.0,
  },
];
const classB = [
  {
    ID: 1,
    Name: "John Doe",
    img: "https://via.placeholder.com/150/92c952",
    Scores: 85,
    Percentage: 85.0,
  },
  {
    ID: 2,
    Name: "Jane Smith",
    img: "https://via.placeholder.com/150/771796",
    Scores: 90,
    Percentage: 90.0,
  },
  {
    ID: 3,
    Name: "Alice Johnson",
    img: "https://via.placeholder.com/150/24f355",
    Scores: 78,
    Percentage: 78.0,
  },
  {
    ID: 4,
    Name: "Bob Brown",
    img: "https://via.placeholder.com/150/d32776",
    Scores: 92,
    Percentage: 92.0,
  },
  {
    ID: 5,
    Name: "Charlie Green",
    img: "https://via.placeholder.com/150/f66b97",
    Scores: 88,
    Percentage: 88.0,
  },
  {
    ID: 6,
    Name: "Diana White",
    img: "https://via.placeholder.com/150/56a8c2",
    Scores: 91,
    Percentage: 91.0,
  },
  {
    ID: 7,
    Name: "Eve Black",
    img: "https://via.placeholder.com/150/b0f7cc",
    Scores: 83,
    Percentage: 83.0,
  },
  {
    ID: 8,
    Name: "Frank Blue",
    img: "https://via.placeholder.com/150/54176f",
    Scores: 79,
    Percentage: 79.0,
  },
  {
    ID: 9,
    Name: "Grace Yellow",
    img: "https://via.placeholder.com/150/51aa97",
    Scores: 87,
    Percentage: 87.0,
  },
  {
    ID: 10,
    Name: "Hank Red",
    img: "https://via.placeholder.com/150/9c184f",
    Scores: 94,
    Percentage: 94.0,
  },
];

function Results() {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container m-auto">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>

          <form>
            <div className="flex">
              <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                  placeholder="Search by Student "
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              <ResultList nameOfClass="Class One" data={classA} />
              <ResultList nameOfClass="Class two" data={classB} />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Results;
