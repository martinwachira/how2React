import Card from "./card";

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((prof) => (
        <Card {...prof} />
      ))}
    </div>
  );
};

export default CardList;
