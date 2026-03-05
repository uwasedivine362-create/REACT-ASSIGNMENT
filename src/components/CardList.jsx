import IdCard from "./IdCard.jsx";

function CardList({ people }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <IdCard key={person.id} person={person} />
      ))}
    </section>
  );
}

export default CardList;
