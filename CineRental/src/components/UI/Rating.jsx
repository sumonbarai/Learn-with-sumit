import star from "../../assets/star.svg";

const Rating = ({ num = 1 }) => {
  let rating = Array(num).fill(undefined);

  return (
    <>
      {rating.map((r, index) => (
        <img key={index} src={star} width={14} height={14} alt="" />
      ))}
    </>
  );
};

export default Rating;
