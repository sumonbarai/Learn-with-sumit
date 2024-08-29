import ResultItem from "./ResultItem";

/* eslint-disable react/no-unknown-property */
function ResultList({ nameOfClass, data }) {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colspan="4">
          {nameOfClass}
        </td>
      </tr>

      {data.map((student) => (
        <ResultItem key={student.ID} student={student} />
      ))}
    </>
  );
}

export default ResultList;
