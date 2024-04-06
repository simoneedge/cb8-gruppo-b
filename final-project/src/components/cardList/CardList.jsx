import Card from "../card/Card";

const CardList = ({ experiences }) => {
  return (
    <div>
      {experiences.map((experience) => (
        <Card key={experience._id} experience={experience} />
      ))}
    </div>
  );
};

export default CardList;
