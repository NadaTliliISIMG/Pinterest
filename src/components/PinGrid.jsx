import PinCard from "./PinCard";

function PinGrid({ pins }) {
  return (
    <section className="pin-grid">
      {pins.map((pin) => (
        <PinCard key={pin.id} image={pin.image} title={pin.title} />
      ))}
    </section>
  );
}

export default PinGrid;