function ResultItem({ student }) {
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">1</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={student.img}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{student.Name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{student.Scores}</td>
      <td className="p-5 text-sm md:text-xl text-center">
        {student.Percentage} %
      </td>
    </tr>
  );
}

export default ResultItem;
