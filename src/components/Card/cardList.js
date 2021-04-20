import Card from "./card";

const testRecords = [
  {
    name: "Martin Wachira",
    avatar_url: "https://avatars.githubusercontent.com/u/60017194?v=4",
    company: "Poneahealthltd",
  },
  {
    name: "Dennis Henry",
    avatar_url: "https://avatars.githubusercontent.com/u/6372787?v=4",
    company: "Techcraft",
  },
  {
    name: "Muriuki",
    avatar_url: "https://avatars.githubusercontent.com/u/7903958?v=4",
    company: "His company",
  },
  {
    name: "Lucy",
    avatar_url: "https://avatars.githubusercontent.com/u/1666345?v=4",
    company: "Unknown comp",
  },
];

const CardList = (props) => {
  return (
    <div>
      {testRecords.map((prof) => (
        <Card {...prof} />
      ))}
    </div>
  );
};

export default CardList;
