import CardList from "@/components/cardList";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/experiences");
  const experiences = await res.json();
  return { props: { experiences } };
};

export default function Experiences({ experiences }) {
  return <CardList experiences={experiences} />;
}
