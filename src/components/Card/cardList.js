import Card from "./card";

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((prof, index) => (
        <Card key={index} {...prof} />
      ))}
    </div>
  );
};

export default CardList;
