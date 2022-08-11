const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-blue dib br3 ma2 grow bw2 shadow-5">
      <img
        alt="Profile Pic"
        src={`https://robohash.org/tghh${id}?set=set${id}`}
      />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
